import { useEffect, useRef, useState, useCallback } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { GeoJSONPolygon } from '@/types';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';


const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY || 'RSkt5YOACTEXH2qfqoKY';
const MAP_STYLE = `https://api.maptiler.com/maps/topo-v2/style.json?key=${MAPTILER_KEY}`;

interface DrawableMapProps {
  onPolygonChange: (polygon: GeoJSONPolygon | null) => void;
  initialPolygon?: GeoJSONPolygon | null;
  className?: string;
}

export function DrawableMap({ onPolygonChange, initialPolygon, className }: DrawableMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState<[number, number][]>([]);

  const updatePolygonSource = useCallback((coordinates: [number, number][]) => {
    if (!map.current || !map.current.getSource('draw-polygon')) return;

    if (coordinates.length >= 3) {
      const closedCoords = [...coordinates, coordinates[0]];
      const polygon: GeoJSONPolygon = {
        type: 'Polygon',
        coordinates: [closedCoords],
      };

      (map.current.getSource('draw-polygon') as maplibregl.GeoJSONSource).setData({
        type: 'Feature',
        properties: {},
        geometry: polygon,
      });

      onPolygonChange(polygon);
    } else if (coordinates.length > 0) {
      (map.current.getSource('draw-polygon') as maplibregl.GeoJSONSource).setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordinates,
        },
      });
      onPolygonChange(null);
    } else {
      (map.current.getSource('draw-polygon') as maplibregl.GeoJSONSource).setData({
        type: 'FeatureCollection',
        features: [],
      });
      onPolygonChange(null);
    }
  }, [onPolygonChange]);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLE,
      center: [77.5946, 12.9716], 
      zoom: 12,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      
      map.current.addSource('draw-polygon', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });

      
      map.current.addLayer({
        id: 'draw-polygon-fill',
        type: 'fill',
        source: 'draw-polygon',
        paint: {
          'fill-color': '#3b82f6',
          'fill-opacity': 0.2,
        },
      });

      
      map.current.addLayer({
        id: 'draw-polygon-line',
        type: 'line',
        source: 'draw-polygon',
        paint: {
          'line-color': '#3b82f6',
          'line-width': 2,
        },
      });

      
      map.current.addSource('draw-points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
      });

      map.current.addLayer({
        id: 'draw-points',
        type: 'circle',
        source: 'draw-points',
        paint: {
          'circle-radius': 6,
          'circle-color': '#3b82f6',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff',
        },
      });

      setIsLoaded(true);

      
      if (initialPolygon) {
        const coords = initialPolygon.coordinates[0].slice(0, -1) as [number, number][];
        setPoints(coords);
        updatePolygonSource(coords);
      }
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    const handleClick = (e: maplibregl.MapMouseEvent) => {
      if (!isDrawing) return;

      const newPoint: [number, number] = [e.lngLat.lng, e.lngLat.lat];
      const newPoints = [...points, newPoint];
      setPoints(newPoints);
      updatePolygonSource(newPoints);

      
      if (map.current?.getSource('draw-points')) {
        (map.current.getSource('draw-points') as maplibregl.GeoJSONSource).setData({
          type: 'FeatureCollection',
          features: newPoints.map((point) => ({
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: point,
            },
          })),
        });
      }
    };

    map.current.on('click', handleClick);

    return () => {
      map.current?.off('click', handleClick);
    };
  }, [isLoaded, isDrawing, points, updatePolygonSource]);

  const startDrawing = () => {
    setIsDrawing(true);
    setPoints([]);
    if (map.current) {
      map.current.getCanvas().style.cursor = 'crosshair';
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (map.current) {
      map.current.getCanvas().style.cursor = '';
    }
  };

  const clearPolygon = () => {
    setPoints([]);
    setIsDrawing(false);
    if (map.current) {
      map.current.getCanvas().style.cursor = '';
      if (map.current.getSource('draw-polygon')) {
        (map.current.getSource('draw-polygon') as maplibregl.GeoJSONSource).setData({
          type: 'FeatureCollection',
          features: [],
        });
      }
      if (map.current.getSource('draw-points')) {
        (map.current.getSource('draw-points') as maplibregl.GeoJSONSource).setData({
          type: 'FeatureCollection',
          features: [],
        });
      }
    }
    onPolygonChange(null);
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <div ref={mapContainer} className="absolute inset-0" />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}

      {}
      <div className="absolute top-4 left-4 flex gap-2">
        <Button
          variant={isDrawing ? "default" : "secondary"}
          size="sm"
          onClick={isDrawing ? stopDrawing : startDrawing}
        >
          <Pencil className="w-4 h-4 mr-1" />
          {isDrawing ? 'Done' : 'Draw'}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={clearPolygon}
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Clear
        </Button>
      </div>

      {}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 text-sm">
        <p className="font-medium">Draw Survey Area</p>
        <p className="text-muted-foreground text-xs">
          {isDrawing
            ? `Click to add points (${points.length} points)`
            : 'Click "Draw" to start drawing polygon'}
        </p>
      </div>
    </div>
  );
}
