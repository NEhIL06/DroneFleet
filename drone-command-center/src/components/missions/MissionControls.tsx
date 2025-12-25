import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, XCircle, Plane } from 'lucide-react';
import type { MissionStatus, Drone } from '@/types';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

interface MissionControlsProps {
  status: MissionStatus;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onAbort: (reason: string) => void;
  onAssignDrone?: (droneId: string) => void;
  availableDrones?: Drone[];
  isLoading?: boolean;
}

export function MissionControls({
  status,
  onStart,
  onPause,
  onResume,
  onAbort,
  onAssignDrone,
  availableDrones = [],
  isLoading,
}: MissionControlsProps) {
  const [abortReason, setAbortReason] = useState('');
  const [selectedDroneId, setSelectedDroneId] = useState('');

  
  const needsDrone = status === 'CREATED';
  const canStart = status === 'READY';
  const canPause = status === 'IN_PROGRESS';
  const canResume = status === 'PAUSED';
  const canAbort = status === 'IN_PROGRESS' || status === 'PAUSED';

  const handleAssignDrone = () => {
    if (selectedDroneId && onAssignDrone) {
      onAssignDrone(selectedDroneId);
      setSelectedDroneId('');
    }
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {needsDrone && (
        <div className="flex items-center gap-2">
          <Plane className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedDroneId} onValueChange={setSelectedDroneId}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a drone" />
            </SelectTrigger>
            <SelectContent>
              {availableDrones.length === 0 ? (
                <SelectItem value="none" disabled>No drones available</SelectItem>
              ) : (
                availableDrones.map((drone) => (
                  <SelectItem key={drone.id} value={drone.id}>
                    {drone.name} - {drone.batteryLevel}%
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
          <Button
            onClick={handleAssignDrone}
            disabled={!selectedDroneId || isLoading}
            size="sm"
          >
            Assign Drone
          </Button>
        </div>
      )}

      {canStart && (
        <Button
          onClick={onStart}
          disabled={isLoading}
          className="bg-status-completed hover:bg-status-completed/90"
        >
          <Play className="mr-2 h-4 w-4" />
          Start Mission
        </Button>
      )}

      {canPause && (
        <Button
          onClick={onPause}
          disabled={isLoading}
          variant="secondary"
        >
          <Pause className="mr-2 h-4 w-4" />
          Pause
        </Button>
      )}

      {canResume && (
        <Button
          onClick={onResume}
          disabled={isLoading}
          className="bg-status-completed hover:bg-status-completed/90"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Resume
        </Button>
      )}

      {canAbort && (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" disabled={isLoading}>
              <XCircle className="mr-2 h-4 w-4" />
              Abort
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Abort Mission</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to abort this mission? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <Textarea
              placeholder="Enter reason for aborting (optional)"
              value={abortReason}
              onChange={(e) => setAbortReason(e.target.value)}
              className="mt-2"
            />
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setAbortReason('')}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  onAbort(abortReason);
                  setAbortReason('');
                }}
                className="bg-destructive hover:bg-destructive/90"
              >
                Abort Mission
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
