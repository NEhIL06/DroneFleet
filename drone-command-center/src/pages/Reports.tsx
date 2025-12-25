import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '@/services/api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { 
  AlertCircle,
  Target,
  Clock,
  TrendingUp,
  FileText,
  Search
} from 'lucide-react';
import type { MissionStatus } from '@/types';

const statusColors: Record<MissionStatus, string> = {
  CREATED: 'hsl(var(--status-created))',
  READY: 'hsl(var(--status-created))',
  IN_PROGRESS: 'hsl(var(--status-in-mission))',
  PAUSED: 'hsl(var(--status-paused))',
  COMPLETED: 'hsl(var(--status-completed))',
  ABORTED: 'hsl(var(--status-error))',
};

export default function Reports() {
  const [missionId, setMissionId] = useState('');

  const { data: orgReport, isLoading: orgLoading, error: orgError } = useQuery({
    queryKey: ['organization-report'],
    queryFn: api.getOrganizationReport,
  });

  const { data: missionReport, isLoading: missionLoading, error: missionError } = useQuery({
    queryKey: ['mission-report', missionId],
    queryFn: () => api.getMissionReport(missionId),
    enabled: !!missionId,
  });

  if (orgError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-xl font-semibold">Failed to load reports</h2>
        <p className="text-muted-foreground">Please check your API connection and try again.</p>
      </div>
    );
  }

  const pieData = orgReport?.missionsByStatus 
    ? Object.entries(orgReport.missionsByStatus).map(([status, count]) => ({
        name: status,
        value: count,
        color: statusColors[status as MissionStatus] || 'hsl(var(--muted))',
      }))
    : [];

  const barData = orgReport?.flightTimeByMonth || [];

  return (
    <div className="space-y-6">
      {}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
        <p className="text-muted-foreground">
          View mission statistics and organizational insights
        </p>
      </div>

      {}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {orgLoading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Missions</p>
                    <p className="text-2xl font-bold">{orgReport?.totalMissions || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Flight Time</p>
                    <p className="text-2xl font-bold">
                      {Math.round((orgReport?.totalFlightTime || 0) / 60)}h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Duration</p>
                    <p className="text-2xl font-bold">
                      {Math.round((orgReport?.averageDuration || 0) / 60)}min
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">This Month</p>
                    <p className="text-2xl font-bold">{orgReport?.missionsThisMonth || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Missions by Status</CardTitle>
            <CardDescription>Distribution of missions across different states</CardDescription>
          </CardHeader>
          <CardContent>
            {orgLoading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Flight Time by Month</CardTitle>
            <CardDescription>Monthly flight hours over time</CardDescription>
          </CardHeader>
          <CardContent>
            {orgLoading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : barData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                    }}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar 
                    dataKey="hours" 
                    fill="hsl(var(--primary))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {}
      <Card>
        <CardHeader>
          <CardTitle>Mission Report</CardTitle>
          <CardDescription>Look up detailed report for a specific mission</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter Mission ID"
              value={missionId}
              onChange={(e) => setMissionId(e.target.value)}
              className="max-w-sm"
            />
            <Button variant="secondary" disabled={!missionId}>
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {missionLoading && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))}
            </div>
          )}

          {missionError && missionId && (
            <div className="text-center py-8 text-muted-foreground">
              Mission report not found
            </div>
          )}

          {missionReport && (
            <div className="space-y-4">
              <h4 className="font-semibold">{missionReport.missionName}</h4>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-xl font-semibold">
                    {Math.round(missionReport.duration / 60)} min
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">Distance</p>
                  <p className="text-xl font-semibold">
                    {(missionReport.distance / 1000).toFixed(2)} km
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">Coverage Area</p>
                  <p className="text-xl font-semibold">
                    {missionReport.coverageArea.toFixed(2)} m²
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground">Pattern</p>
                  <p className="text-xl font-semibold">
                    {missionReport.configuration.pattern}
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Completed: {new Date(missionReport.completedAt).toLocaleString()}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
