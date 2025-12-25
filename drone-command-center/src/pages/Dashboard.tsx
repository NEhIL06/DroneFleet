import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import api from '@/services/api';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { MissionCard } from '@/components/missions/MissionCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Target, 
  Plane, 
  Clock, 
  Activity,
  Plus,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { useMemo } from 'react';

export default function Dashboard() {
  const { data: missions, isLoading: missionsLoading, error: missionsError } = useQuery({
    queryKey: ['missions'],
    queryFn: api.getMissions,
  });

  const { data: report, isLoading: reportLoading } = useQuery({
    queryKey: ['organization-report'],
    queryFn: api.getOrganizationReport,
  });

  const activeMissions = useMemo(() => {
    return missions?.filter(m => m.status === 'IN_PROGRESS') || [];
  }, [missions]);

  const stats = useMemo(() => {
    const totalMissions = report?.totalMissions || missions?.length || 0;
    const activeCount = activeMissions.length;
    const totalFlightTime = report?.totalFlightTime || 0;
    const completedCount = missions?.filter(m => m.status === 'COMPLETED').length || 0;

    return [
      {
        title: 'Total Missions',
        value: totalMissions,
        description: `${completedCount} completed`,
        icon: Target,
      },
      {
        title: 'Active Missions',
        value: activeCount,
        description: 'Currently in progress',
        icon: Activity,
      },
      {
        title: 'Total Flight Time',
        value: `${Math.round(totalFlightTime / 60)}h`,
        description: 'Across all missions',
        icon: Clock,
      },
      {
        title: 'Fleet Status',
        value: 'Online',
        description: 'All systems operational',
        icon: Plane,
      },
    ];
  }, [missions, activeMissions, report]);

  if (missionsError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-xl font-semibold">Failed to load dashboard</h2>
        <p className="text-muted-foreground">Please check your API connection and try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mission Control</h1>
          <p className="text-muted-foreground">
            Monitor and manage your drone survey operations
          </p>
        </div>
      </div>

      {}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {missionsLoading || reportLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))
        ) : (
          stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))
        )}
      </div>

      {}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Active Missions
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/missions">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {missionsLoading ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-32 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : activeMissions.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {activeMissions.slice(0, 6).map((mission) => (
                <MissionCard key={mission.id} mission={mission} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Plane className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Active Missions</h3>
              <p className="text-muted-foreground mb-4">
                Start a new mission to begin drone operations
              </p>
              <Button asChild>
                <Link to="/missions/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Mission
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {}
      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/missions">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Missions</h3>
                <p className="text-sm text-muted-foreground">
                  View and manage all missions
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/fleet">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Fleet</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor drone status and health
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link to="/reports">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer h-full">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Reports</h3>
                <p className="text-sm text-muted-foreground">
                  View analytics and insights
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
