import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import api from '@/services/api';
import { MissionCard } from '@/components/missions/MissionCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useMissionStore } from '@/store/missionStore';
import { 
  Plus, 
  Target,
  AlertCircle,
  Filter
} from 'lucide-react';
import type { MissionStatus } from '@/types';

const statusFilters: { label: string; value: MissionStatus | null }[] = [
  { label: 'All', value: null },
  { label: 'Created', value: 'CREATED' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Paused', value: 'PAUSED' },
  { label: 'Completed', value: 'COMPLETED' },
  { label: 'Aborted', value: 'ABORTED' },
];

export default function Missions() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { statusFilter, setStatusFilter } = useMissionStore();

  const { data: missions, isLoading, error } = useQuery({
    queryKey: ['missions'],
    queryFn: api.getMissions,
  });

  const startMutation = useMutation({
    mutationFn: api.startMission,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['missions'] });
      toast({
        title: 'Mission Started',
        description: 'The mission has been successfully started.',
      });
    },
    onError: (error: Error) => {
      toast({
        title: 'Failed to Start Mission',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const filteredMissions = missions?.filter((mission) => {
    if (!statusFilter) return true;
    return mission.status === statusFilter;
  });

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-xl font-semibold">Failed to load missions</h2>
        <p className="text-muted-foreground">Please check your API connection and try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Missions</h1>
          <p className="text-muted-foreground">
            Manage and monitor your drone survey missions
          </p>
        </div>
        <Button asChild>
          <Link to="/missions/new">
            <Plus className="mr-2 h-4 w-4" />
            New Mission
          </Link>
        </Button>
      </div>

      {}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Filter:</span>
            {statusFilters.map((filter) => (
              <Badge
                key={filter.label}
                variant={statusFilter === filter.value ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/80"
                onClick={() => setStatusFilter(filter.value)}
              >
                {filter.label}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {}
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredMissions && filteredMissions.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMissions.map((mission) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              onStart={() => startMutation.mutate(mission.id)}
              isStarting={startMutation.isPending}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Target className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No Missions Found</h3>
          <p className="text-muted-foreground mb-4">
            {statusFilter 
              ? `No missions with status "${statusFilter}"`
              : 'Create your first mission to get started'
            }
          </p>
          <Button asChild>
            <Link to="/missions/new">
              <Plus className="mr-2 h-4 w-4" />
              Create Mission
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
