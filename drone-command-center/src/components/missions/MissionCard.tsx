import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { StatusBadge } from './StatusBadge';
import { Button } from '@/components/ui/button';
import { Eye, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Mission } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface MissionCardProps {
  mission: Mission;
  onStart?: () => void;
  isStarting?: boolean;
}

export function MissionCard({ mission, onStart, isStarting }: MissionCardProps) {
  
  const canStart = mission.status === 'READY';

  
  const createdText = mission.createdAt
    ? `Created ${formatDistanceToNow(new Date(mission.createdAt), { addSuffix: true })}`
    : '';

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">{mission.name}</CardTitle>
          {createdText && (
            <p className="text-sm text-muted-foreground">{createdText}</p>
          )}
        </div>
        <StatusBadge status={mission.status} showPulse />
      </CardHeader>
      <CardContent className="space-y-4">
        {(mission.pattern || mission.altitude || mission.speed) && (
          <div className="grid grid-cols-3 gap-4 text-sm">
            {mission.pattern && (
              <div>
                <p className="text-muted-foreground">Pattern</p>
                <p className="font-medium">{mission.pattern}</p>
              </div>
            )}
            {mission.altitude && (
              <div>
                <p className="text-muted-foreground">Altitude</p>
                <p className="font-medium">{mission.altitude}m</p>
              </div>
            )}
            {mission.speed && (
              <div>
                <p className="text-muted-foreground">Speed</p>
                <p className="font-medium">{mission.speed}m/s</p>
              </div>
            )}
          </div>
        )}

        {mission.assignedDroneId && (
          <div className="flex items-center gap-2 text-sm">
            <Plane className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Drone:</span>
            <span className="font-medium">{mission.assignedDroneId}</span>
          </div>
        )}

        {(mission.status === 'IN_PROGRESS' || mission.status === 'PAUSED') && mission.progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(mission.progress)}%</span>
            </div>
            <Progress value={mission.progress} className="h-2" />
            {mission.eta && (
              <p className="text-xs text-muted-foreground">ETA: {mission.eta}</p>
            )}
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button asChild variant="outline" className="flex-1">
            <Link to={`/missions/${mission.id}`}>
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Link>
          </Button>
          {canStart && onStart && (
            <Button
              onClick={onStart}
              disabled={isStarting}
              className="flex-1 bg-status-completed hover:bg-status-completed/90"
            >
              Start
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
