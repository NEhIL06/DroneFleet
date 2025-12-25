import { Badge } from '@/components/ui/badge';
import type { MissionStatus } from '@/types';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: MissionStatus;
  className?: string;
  showPulse?: boolean;
}

const statusConfig: Record<MissionStatus, { label: string; className: string }> = {
  CREATED: {
    label: 'Created',
    className: 'bg-status-created text-status-created-foreground',
  },
  READY: {
    label: 'Ready',
    className: 'bg-status-created text-status-created-foreground',
  },
  IN_PROGRESS: {
    label: 'In Progress',
    className: 'bg-status-in-mission text-status-in-mission-foreground',
  },
  PAUSED: {
    label: 'Paused',
    className: 'bg-status-paused text-status-paused-foreground',
  },
  COMPLETED: {
    label: 'Completed',
    className: 'bg-status-completed text-status-completed-foreground',
  },
  ABORTED: {
    label: 'Aborted',
    className: 'bg-status-error text-status-error-foreground',
  },
};

export function StatusBadge({ status, className, showPulse }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge 
      className={cn(
        config.className,
        showPulse && status === 'IN_PROGRESS' && 'animate-pulse-slow',
        className
      )}
    >
      {showPulse && status === 'IN_PROGRESS' && (
        <span className="mr-1.5 h-2 w-2 rounded-full bg-current animate-pulse" />
      )}
      {config.label}
    </Badge>
  );
}
