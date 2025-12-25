import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Plane, Battery, Activity, Clock } from 'lucide-react';
import type { Drone } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface DroneCardProps {
  drone: Drone;
}

const statusConfig = {
  AVAILABLE: {
    label: 'Available',
    className: 'bg-status-available text-status-available-foreground',
  },
  IN_MISSION: {
    label: 'In Mission',
    className: 'bg-status-in-mission text-status-in-mission-foreground',
  },
  MAINTENANCE: {
    label: 'Maintenance',
    className: 'bg-status-warning text-status-warning-foreground',
  },
  OFFLINE: {
    label: 'Offline',
    className: 'bg-status-error text-status-error-foreground',
  },
};

function getBatteryColor(level: number): string {
  if (level > 60) return 'bg-status-available';
  if (level > 30) return 'bg-status-warning';
  return 'bg-status-error';
}

export function DroneCard({ drone }: DroneCardProps) {
  const status = statusConfig[drone.status];
  
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Plane className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">{drone.name}</CardTitle>
            {drone.model && (
              <p className="text-sm text-muted-foreground">{drone.model}</p>
            )}
          </div>
        </div>
        <Badge className={status.className}>
          {drone.status === 'IN_MISSION' && (
            <span className="mr-1.5 h-2 w-2 rounded-full bg-current animate-pulse" />
          )}
          {status.label}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Battery className="h-4 w-4" />
              <span>Battery</span>
            </div>
            <span className={cn(
              'font-medium',
              drone.batteryLevel <= 30 && 'text-status-error'
            )}>
              {drone.batteryLevel}%
            </span>
          </div>
          <Progress 
            value={drone.batteryLevel} 
            className={cn('h-2', getBatteryColor(drone.batteryLevel))}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Health</p>
              <p className="font-medium">{drone.health}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground">Last Seen</p>
              <p className="font-medium">
                {formatDistanceToNow(new Date(drone.lastSeen), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>

        {drone.serialNumber && (
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              S/N: {drone.serialNumber}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
