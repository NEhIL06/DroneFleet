import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/services/api';
import wsService from '@/services/websocket';
import { useMissionStore } from '@/store/missionStore';
import { MissionMap } from '@/components/maps/MissionMap';
import { TelemetryPanel } from '@/components/missions/TelemetryPanel';
import { MissionControls } from '@/components/missions/MissionControls';
import { StatusBadge } from '@/components/missions/StatusBadge';
import { ConnectionStatus } from '@/components/ui/ConnectionStatus';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import {
  ArrowLeft,
  MapPin,
  Plane,
  Settings,
  AlertCircle,
  Clock
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export default function MissionDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const {
    telemetry,
    setTelemetry,
    isConnected,
    setIsConnected
  } = useMissionStore();

  const { data: mission, isLoading, error } = useQuery({
    queryKey: ['mission', id],
    queryFn: () => api.getMission(id!),
    enabled: !!id,
    refetchInterval: 5000, 
  });

  
  const { data: drones = [] } = useQuery({
    queryKey: ['drones'],
    queryFn: api.getDrones,
  });

  
  useEffect(() => {
    if (!id) return;

    
    wsService.connect();

    
    const unsubConnect = wsService.onConnect(() => {
      setIsConnected(true);
    });

    const unsubDisconnect = wsService.onDisconnect(() => {
      setIsConnected(false);
      toast({
        title: 'Connection Lost',
        description: 'Attempting to reconnect...',
        variant: 'destructive',
      });
    });

    const unsubError = wsService.onError(() => {
      toast({
        title: 'WebSocket Error',
        description: 'Failed to connect to telemetry service',
        variant: 'destructive',
      });
    });

    
    const unsubTelemetry = wsService.subscribeToMission(id, (data) => {
      setTelemetry(data);

      
      if (data.progress >= 100) {
        queryClient.invalidateQueries({ queryKey: ['mission', id] });
      }
    });

    return () => {
      unsubConnect();
      unsubDisconnect();
      unsubError();
      unsubTelemetry();
      setTelemetry(null);
    };
  }, [id, setTelemetry, setIsConnected, queryClient, toast]);

  
  const startMutation = useMutation({
    mutationFn: () => api.startMission(id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mission', id] });
      toast({ title: 'Mission Started' });
    },
    onError: (err: Error) => {
      toast({ title: 'Failed to Start', description: err.message, variant: 'destructive' });
    },
  });

  const pauseMutation = useMutation({
    mutationFn: () => api.pauseMission(id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mission', id] });
      toast({ title: 'Mission Paused' });
    },
    onError: (err: Error) => {
      toast({ title: 'Failed to Pause', description: err.message, variant: 'destructive' });
    },
  });

  const resumeMutation = useMutation({
    mutationFn: () => api.resumeMission(id!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mission', id] });
      toast({ title: 'Mission Resumed' });
    },
    onError: (err: Error) => {
      toast({ title: 'Failed to Resume', description: err.message, variant: 'destructive' });
    },
  });

  const abortMutation = useMutation({
    mutationFn: (reason: string) => api.abortMission(id!, reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mission', id] });
      toast({ title: 'Mission Aborted', variant: 'destructive' });
    },
    onError: (err: Error) => {
      toast({ title: 'Failed to Abort', description: err.message, variant: 'destructive' });
    },
  });

  const assignDroneMutation = useMutation({
    mutationFn: (droneId: string) => api.assignDrone(id!, droneId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mission', id] });
      queryClient.invalidateQueries({ queryKey: ['drones'] });
      toast({ title: 'Drone Assigned', description: 'Mission is now ready to start.' });
    },
    onError: (err: Error) => {
      toast({ title: 'Failed to Assign Drone', description: err.message, variant: 'destructive' });
    },
  });

  const isControlLoading =
    startMutation.isPending ||
    pauseMutation.isPending ||
    resumeMutation.isPending ||
    abortMutation.isPending ||
    assignDroneMutation.isPending;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-xl font-semibold">Failed to load mission</h2>
        <p className="text-muted-foreground">Mission not found or API error.</p>
        <Button asChild variant="outline">
          <Link to="/missions">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Missions
          </Link>
        </Button>
      </div>
    );
  }

  if (isLoading || !mission) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <div className="grid gap-6 lg:grid-cols-3">
          <Skeleton className="h-[400px] lg:col-span-2" />
          <Skeleton className="h-[400px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/missions">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">{mission.name}</h1>
            <StatusBadge status={mission.status} showPulse />
          </div>
          <p className="text-muted-foreground ml-12">
            {mission.createdAt
              ? `Created ${formatDistanceToNow(new Date(mission.createdAt), { addSuffix: true })}`
              : `Mission ID: ${mission.id}`}
          </p>
        </div>
        <ConnectionStatus isConnected={isConnected} />
      </div>

      {}
      {mission.status === 'ABORTED' && (mission as any).abortReason && (
        <Card className="border-destructive/50 bg-destructive/10">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <div>
              <p className="font-medium text-destructive">Mission Aborted</p>
              <p className="text-sm text-muted-foreground">
                Reason: {(mission as any).abortReason || 'Operator abort'}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardContent className="p-4">
          <MissionControls
            status={mission.status}
            onStart={() => startMutation.mutate()}
            onPause={() => pauseMutation.mutate()}
            onResume={() => resumeMutation.mutate()}
            onAbort={(reason) => abortMutation.mutate(reason)}
            onAssignDrone={(droneId) => assignDroneMutation.mutate(droneId)}
            availableDrones={drones}
            isLoading={isControlLoading}
          />
        </CardContent>
      </Card>

      {}
      <div className="grid gap-6 lg:grid-cols-3">
        {}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Mission Map
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <MissionMap
              surveyArea={mission.surveyArea}
              flightPath={mission.flightPath}
              dronePosition={telemetry?.position}
              homeBase={mission.assignedDrone ? {
                lat: mission.assignedDrone.homeBaseLat || 12.9716,
                lng: mission.assignedDrone.homeBaseLng || 77.5946
              } : undefined}
              telemetry={telemetry}
              missionStatus={mission.status}
              className="h-[450px]"
            />
          </CardContent>
        </Card>

        {}
        <TelemetryPanel data={telemetry} />
      </div>

      {}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-2 gap-4">
              {mission.pattern && (
                <div>
                  <dt className="text-sm text-muted-foreground">Pattern</dt>
                  <dd className="font-medium">{mission.pattern}</dd>
                </div>
              )}
              {mission.altitude && (
                <div>
                  <dt className="text-sm text-muted-foreground">Altitude</dt>
                  <dd className="font-medium">{mission.altitude}m</dd>
                </div>
              )}
              {mission.overlapPercentage && (
                <div>
                  <dt className="text-sm text-muted-foreground">Overlap</dt>
                  <dd className="font-medium">{mission.overlapPercentage}%</dd>
                </div>
              )}
              {mission.speed && (
                <div>
                  <dt className="text-sm text-muted-foreground">Speed</dt>
                  <dd className="font-medium">{mission.speed}m/s</dd>
                </div>
              )}
              {mission.patternConfig?.gridSpacing && (
                <div>
                  <dt className="text-sm text-muted-foreground">Grid Spacing</dt>
                  <dd className="font-medium">{mission.patternConfig.gridSpacing}m</dd>
                </div>
              )}
              {mission.patternConfig?.crosshatchAngle && (
                <div>
                  <dt className="text-sm text-muted-foreground">Crosshatch Angle</dt>
                  <dd className="font-medium">{mission.patternConfig.crosshatchAngle}°</dd>
                </div>
              )}
              {mission.patternConfig?.perimeterOffset && (
                <div>
                  <dt className="text-sm text-muted-foreground">Perimeter Offset</dt>
                  <dd className="font-medium">{mission.patternConfig.perimeterOffset}m</dd>
                </div>
              )}
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="h-5 w-5" />
              Assignment
            </CardTitle>
          </CardHeader>
          <CardContent>
            {mission.assignedDroneId ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Plane className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Drone ID</p>
                    <p className="text-sm text-muted-foreground">{mission.assignedDroneId}</p>
                  </div>
                </div>
                {mission.eta && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">ETA</p>
                      <p className="text-sm text-muted-foreground">{mission.eta}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <Plane className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No drone assigned</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
