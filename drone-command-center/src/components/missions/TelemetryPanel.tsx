import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Battery,
  Signal,
  Thermometer,
  Wind,
  Droplets,
  Navigation,
  Gauge,
  Clock,
  MapPin,
  Activity
} from 'lucide-react';
import type { TelemetryData } from '@/types';

interface TelemetryPanelProps {
  data: TelemetryData | null;
}

function formatPhase(phase?: string): string {
  switch (phase) {
    case 'TRANSIT_TO_SURVEY': return 'Transit to Survey Area';
    case 'CONDUCTING_SURVEY': return 'Conducting Survey';
    case 'TRANSIT_HOME': return 'Returning to Home Base';
    default: return 'Waiting...';
  }
}

function getPhaseColor(phase?: string): string {
  switch (phase) {
    case 'TRANSIT_TO_SURVEY': return 'text-blue-400';
    case 'CONDUCTING_SURVEY': return 'text-green-400';
    case 'TRANSIT_HOME': return 'text-orange-400';
    default: return 'text-muted-foreground';
  }
}

function formatEta(seconds?: number): string {
  if (!seconds) return '--';
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins < 60) return `${mins}m ${secs}s`;
  const hours = Math.floor(mins / 60);
  return `${hours}h ${mins % 60}m`;
}

function formatDistance(meters?: number): string {
  if (!meters) return '--';
  if (meters < 1000) return `${Math.round(meters)}m`;
  return `${(meters / 1000).toFixed(2)}km`;
}

function getAqiStatus(aqi?: number): { label: string; color: string } {
  if (!aqi) return { label: '--', color: 'text-muted-foreground' };
  if (aqi <= 50) return { label: 'Good', color: 'text-green-400' };
  if (aqi <= 100) return { label: 'Moderate', color: 'text-yellow-400' };
  if (aqi <= 150) return { label: 'Unhealthy for Sensitive', color: 'text-orange-400' };
  return { label: 'Unhealthy', color: 'text-red-400' };
}

function getBatteryColor(level?: number): string {
  if (!level) return 'text-muted-foreground';
  if (level > 50) return 'text-green-400';
  if (level > 20) return 'text-yellow-400';
  return 'text-red-400';
}

export function TelemetryPanel({ data }: TelemetryPanelProps) {
  if (!data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Live Telemetry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Activity className="h-8 w-8 text-muted-foreground mb-2 animate-pulse" />
            <p className="text-muted-foreground">Waiting for telemetry data...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const aqiStatus = getAqiStatus(data.airQualityIndex);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Live Telemetry
          </span>
          {}
          <span className="flex items-center gap-1.5 text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-400 font-medium">LIVE</span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {}
        <div className="space-y-2">
          <div className={`text-sm font-medium ${getPhaseColor(data.phase)}`}>
            {formatPhase(data.phase)}
          </div>
          <Progress value={data.progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress: {data.progress}%</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              ETA: {formatEta(data.etaSeconds)}
            </span>
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Battery className={`h-3 w-3 ${getBatteryColor(data.batteryLevel)}`} />
              Battery
            </div>
            <div className={`text-lg font-semibold ${getBatteryColor(data.batteryLevel)}`}>
              {data.batteryLevel ?? '--'}%
            </div>
            {data.batteryVoltage && (
              <div className="text-xs text-muted-foreground">
                {data.batteryVoltage.toFixed(1)}V
              </div>
            )}
          </div>

          <div className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Signal className="h-3 w-3" />
              Signal
            </div>
            <div className="text-lg font-semibold text-green-400">
              {data.signalStrength ?? '--'}%
            </div>
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Gauge className="h-3 w-3" />
              Speed
            </div>
            <div className="text-lg font-semibold">
              {data.speed?.toFixed(1) ?? '--'} m/s
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Navigation className="h-3 w-3" />
              Heading
            </div>
            <div className="text-lg font-semibold">
              {data.heading?.toFixed(0) ?? '--'}°
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <MapPin className="h-3 w-3" />
              Altitude
            </div>
            <div className="text-lg font-semibold">
              {data.altitude ?? '--'}m
            </div>
          </div>

          <div className="p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Thermometer className="h-3 w-3" />
              Motor Temp
            </div>
            <div className="text-lg font-semibold">
              {data.motorTemp?.toFixed(0) ?? '--'}°C
            </div>
          </div>
        </div>

        {}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="text-xs text-muted-foreground mb-1">Distance Traveled</div>
            <div className="text-lg font-semibold">{formatDistance(data.distanceTraveled)}</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="text-xs text-muted-foreground mb-1">Remaining</div>
            <div className="text-lg font-semibold">{formatDistance(data.distanceRemaining)}</div>
          </div>
        </div>

        {}
        {data.phase === 'CONDUCTING_SURVEY' && (
          <div className="border-t pt-4 mt-4">
            <div className="text-sm font-medium mb-3">Survey Readings</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Wind className="h-3 w-3" />
                  Air Quality
                </div>
                <div className={`text-lg font-semibold ${aqiStatus.color}`}>
                  {data.airQualityIndex ?? '--'}
                </div>
                <div className={`text-xs ${aqiStatus.color}`}>{aqiStatus.label}</div>
              </div>

              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Thermometer className="h-3 w-3" />
                  Temperature
                </div>
                <div className="text-lg font-semibold text-blue-400">
                  {data.temperature?.toFixed(1) ?? '--'}°C
                </div>
              </div>

              <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Droplets className="h-3 w-3" />
                  Humidity
                </div>
                <div className="text-lg font-semibold text-cyan-400">
                  {data.humidity?.toFixed(0) ?? '--'}%
                </div>
              </div>

              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Activity className="h-3 w-3" />
                  PM2.5
                </div>
                <div className="text-lg font-semibold text-purple-400">
                  {data.particulateMatter?.toFixed(1) ?? '--'}
                </div>
                <div className="text-xs text-muted-foreground">µg/m³</div>
              </div>
            </div>
          </div>
        )}

        {}
        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          Position: {data.position?.lat?.toFixed(6)}, {data.position?.lng?.toFixed(6)}
        </div>
      </CardContent>
    </Card>
  );
}
