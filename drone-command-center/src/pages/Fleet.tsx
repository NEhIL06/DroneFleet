import { useQuery } from '@tanstack/react-query';
import api from '@/services/api';
import { DroneCard } from '@/components/drones/DroneCard';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Plane,
  AlertCircle
} from 'lucide-react';

export default function Fleet() {
  const { data: drones, isLoading, error } = useQuery({
    queryKey: ['drones'],
    queryFn: api.getDrones,
    refetchInterval: 10000, 
  });

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-xl font-semibold">Failed to load fleet</h2>
        <p className="text-muted-foreground">Please check your API connection and try again.</p>
      </div>
    );
  }

  const availableCount = drones?.filter(d => d.status === 'AVAILABLE').length || 0;
  const inMissionCount = drones?.filter(d => d.status === 'IN_MISSION').length || 0;
  const maintenanceCount = drones?.filter(d => d.status === 'MAINTENANCE').length || 0;
  const offlineCount = drones?.filter(d => d.status === 'OFFLINE').length || 0;

  return (
    <div className="space-y-6">
      {}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fleet Management</h1>
        <p className="text-muted-foreground">
          Monitor drone status, battery levels, and health
        </p>
      </div>

      {}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-status-available">{availableCount}</p>
            <p className="text-sm text-muted-foreground">Available</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-status-in-mission">{inMissionCount}</p>
            <p className="text-sm text-muted-foreground">In Mission</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-status-warning">{maintenanceCount}</p>
            <p className="text-sm text-muted-foreground">Maintenance</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-status-error">{offlineCount}</p>
            <p className="text-sm text-muted-foreground">Offline</p>
          </CardContent>
        </Card>
      </div>

      {}
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="h-10 w-10 rounded-lg" />
                  <div>
                    <Skeleton className="h-5 w-24 mb-1" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-2 w-full mb-4" />
                <div className="grid grid-cols-2 gap-4">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : drones && drones.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {drones.map((drone) => (
            <DroneCard key={drone.id} drone={drone} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Plane className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No Drones Found</h3>
          <p className="text-muted-foreground">
            No drones are registered in the system
          </p>
        </div>
      )}
    </div>
  );
}
