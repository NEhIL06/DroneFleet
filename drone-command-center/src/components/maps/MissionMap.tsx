import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { GeoJSONPolygon, TelemetryData } from '@/types';


const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY || 'RSkt5YOACTEXH2qfqoKY';
const MAP_STYLE = `https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${MAPTILER_KEY}`;

interface Waypoint {
  lat: number;
  lng: number;
}

interface FlightPathData {
  pattern?: string;
  waypointCount?: number;
  estimatedDistanceMeters?: number;
  estimatedDurationSeconds?: number;
  coordinates?: Waypoint[] | number[][][];
}

interface MissionMapProps {
  flightPath?: FlightPathData | GeoJSONPolygon;
  surveyArea?: GeoJSONPolygon;
  dronePosition?: TelemetryData['position'];
  homeBase?: { lat: number; lng: number };
  telemetry?: TelemetryData | null;
  missionStatus?: string;
  className?: string;
}


function extractWaypoints(flightPath?: FlightPathData | GeoJSONPolygon): [number, number][] {
  if (!flightPath) return [];

  
  if ('type' in flightPath && flightPath.type === 'Polygon' && flightPath.coordinates) {
    return (flightPath.coordinates[0] || []) as [number, number][];
  }

  
  if ('coordinates' in flightPath && flightPath.coordinates) {
    const coords = flightPath.coordinates;
    if (Array.isArray(coords)) {
      
      if (coords.length > 0 && typeof coords[0] === 'object' && 'lat' in coords[0]) {
        return (coords as Waypoint[]).map(wp => [wp.lng, wp.lat] as [number, number]);
      }
      
      if (coords.length > 0 && Array.isArray(coords[0])) {
        if (Array.isArray(coords[0][0])) {
          return (coords[0] as number[][]).map(c => [c[0], c[1]] as [number, number]);
        }
      }
    }
  }

  return [];
}

export function MissionMap({
  flightPath,
  surveyArea,
  dronePosition,
  homeBase,
  telemetry,
  missionStatus,
  className
}: MissionMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const droneMarker = useRef<maplibregl.Marker | null>(null);
  const homeMarker = useRef<maplibregl.Marker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [flightTrail, setFlightTrail] = useState<[number, number][]>([]);

  
  const currentPosition = telemetry?.position || dronePosition;

  
  const waypoints = extractWaypoints(flightPath);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    
    const defaultCenter: [number, number] = [77.5946, 12.9716];

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: defaultCenter,
      zoom: 14,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      setIsLoaded(true);
    });

    return () => {
      if (droneMarker.current) droneMarker.current.remove();
      if (homeMarker.current) homeMarker.current.remove();
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  
  useEffect(() => {
    if (!map.current || !isLoaded || !homeBase) return;

    if (homeMarker.current) {
      homeMarker.current.setLngLat([homeBase.lng, homeBase.lat]);
    } else {
      const el = document.createElement('div');
      el.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="width: 40px; height: 40px; background: #f97316; border-radius: 8px; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
          </div>
          <div style="font-size: 11px; color: white; background: #f97316; padding: 2px 8px; border-radius: 4px; margin-top: 4px; font-weight: 500; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Home Base</div>
        </div>
      `;

      homeMarker.current = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat([homeBase.lng, homeBase.lat])
        .addTo(map.current);
    }
  }, [isLoaded, homeBase]);

  
  useEffect(() => {
    if (!map.current || !isLoaded || !surveyArea?.coordinates?.[0]) return;

    const sourceId = 'survey-area';

    if (map.current.getSource(sourceId)) {
      (map.current.getSource(sourceId) as maplibregl.GeoJSONSource).setData({
        type: 'Feature',
        properties: {},
        geometry: surveyArea,
      });
    } else {
      map.current.addSource(sourceId, {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: surveyArea,
        },
      });

      map.current.addLayer({
        id: 'survey-area-fill',
        type: 'fill',
        source: sourceId,
        paint: {
          'fill-color': '#3b82f6',
          'fill-opacity': 0.15,
        },
      });

      map.current.addLayer({
        id: 'survey-area-outline',
        type: 'line',
        source: sourceId,
        paint: {
          'line-color': '#3b82f6',
          'line-width': 2,
          'line-dasharray': [2, 2],
        },
      });
    }

    
    const coordinates = surveyArea.coordinates[0];
    const bounds = coordinates.reduce(
      (bounds, coord) => bounds.extend(coord as [number, number]),
      new maplibregl.LngLatBounds(coordinates[0] as [number, number], coordinates[0] as [number, number])
    );
    map.current.fitBounds(bounds, { padding: 80 });
  }, [isLoaded, surveyArea]);

  
  useEffect(() => {
    if (!map.current || !isLoaded || waypoints.length < 2) return;

    const sourceId = 'flight-path';

    const lineData = {
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates: waypoints,
      },
    };

    if (map.current.getSource(sourceId)) {
      (map.current.getSource(sourceId) as maplibregl.GeoJSONSource).setData(lineData);
    } else {
      map.current.addSource(sourceId, {
        type: 'geojson',
        data: lineData,
      });

      map.current.addLayer({
        id: 'flight-path-line',
        type: 'line',
        source: sourceId,
        paint: {
          'line-color': '#22c55e',
          'line-width': 2,
          'line-opacity': 0.6,
          'line-dasharray': [4, 4],
        },
      });
    }

    console.log('[MissionMap] Added flight path with', waypoints.length, 'waypoints');
  }, [isLoaded, waypoints]);

  
  useEffect(() => {
    if (!map.current || !isLoaded || flightTrail.length < 2) return;

    const sourceId = 'flight-trail';

    const lineData = {
      type: 'Feature' as const,
      properties: {},
      geometry: {
        type: 'LineString' as const,
        coordinates: flightTrail,
      },
    };

    if (map.current.getSource(sourceId)) {
      (map.current.getSource(sourceId) as maplibregl.GeoJSONSource).setData(lineData);
    } else {
      map.current.addSource(sourceId, {
        type: 'geojson',
        data: lineData,
      });

      map.current.addLayer({
        id: 'flight-trail-line',
        type: 'line',
        source: sourceId,
        paint: {
          'line-color': '#f97316',
          'line-width': 3,
          'line-opacity': 0.9,
        },
      });
    }
  }, [isLoaded, flightTrail]);

  
  useEffect(() => {
    if (!map.current || !isLoaded || !currentPosition) return;

    
    if (missionStatus === 'PAUSED') return;

    const lngLat: [number, number] = [currentPosition.lng, currentPosition.lat];

    
    setFlightTrail(prev => {
      const last = prev[prev.length - 1];
      
      if (!last || Math.abs(last[0] - lngLat[0]) > 0.00001 || Math.abs(last[1] - lngLat[1]) > 0.00001) {
        return [...prev, lngLat];
      }
      return prev;
    });

    
    if (droneMarker.current) {
      droneMarker.current.setLngLat(lngLat);
    } else {
      const el = document.createElement('div');
      el.innerHTML = `
        <div style="position: relative; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; inset: 0; background: rgba(59, 130, 246, 0.3); border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="position: absolute; inset: 4px; background: rgba(59, 130, 246, 0.4); border-radius: 50%; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
          <div style="position: relative; width: 32px; height: 32px; background: #3b82f6; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;">
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
            </svg>
          </div>
        </div>
        <style>
          @keyframes ping { 75%, 100% { transform: scale(1.5); opacity: 0; } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        </style>
      `;

      droneMarker.current = new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat(lngLat)
        .addTo(map.current);

      console.log('[MissionMap] Created drone marker at', lngLat);
    }

    
    map.current.easeTo({
      center: lngLat,
      duration: 800,
    });
  }, [isLoaded, currentPosition]);

  
  useEffect(() => {
    setFlightTrail([]);
  }, [surveyArea]);

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={{ minHeight: '400px' }}>
      <div ref={mapContainer} className="absolute inset-0" />

      {}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 text-xs space-y-2 border shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500 border border-white"></div>
          <span>Drone</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-orange-500 border border-white"></div>
          <span>Home Base</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-orange-500"></div>
          <span>Flight Trail</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-green-500 opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #22c55e 0, #22c55e 4px, transparent 4px, transparent 8px)' }}></div>
          <span>Planned Path</span>
        </div>
      </div>

      {}
      {telemetry?.phase && (
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm border shadow-lg">
          <span className={`font-medium ${telemetry.phase === 'TRANSIT_TO_SURVEY' ? 'text-blue-400' :
            telemetry.phase === 'CONDUCTING_SURVEY' ? 'text-green-400' :
              'text-orange-400'
            }`}>
            {telemetry.phase === 'TRANSIT_TO_SURVEY' ? '✈️ Transit to Survey' :
              telemetry.phase === 'CONDUCTING_SURVEY' ? '📡 Conducting Survey' :
                '🏠 Returning Home'}
          </span>
        </div>
      )}

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
