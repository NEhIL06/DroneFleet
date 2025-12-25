import { Coordinate, SurveyArea, PatternConfig } from '../types/api';
import { MissionPattern } from '../../../prisma/generated/client';


export function calculatePolygonArea(coordinates: number[][][]): number {
    const ring = coordinates[0];
    if (!ring || ring.length < 3) return 0;

    let area = 0;
    const n = ring.length;

    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        const [lng1, lat1] = ring[i];
        const [lng2, lat2] = ring[j];

        
        const x1 = lng1 * 111320 * Math.cos(lat1 * Math.PI / 180);
        const y1 = lat1 * 110540;
        const x2 = lng2 * 111320 * Math.cos(lat2 * Math.PI / 180);
        const y2 = lat2 * 110540;

        area += x1 * y2 - x2 * y1;
    }

    return Math.abs(area / 2);
}


export function calculateDistance(coord1: Coordinate, coord2: Coordinate): number {
    const R = 6371000; 
    const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const dLng = (coord2.lng - coord1.lng) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}


export function calculatePathDistance(waypoints: Coordinate[]): number {
    let totalDistance = 0;

    for (let i = 0; i < waypoints.length - 1; i++) {
        totalDistance += calculateDistance(waypoints[i], waypoints[i + 1]);
    }

    return totalDistance;
}


export function getBoundingBox(coordinates: number[][][]): { minLat: number; maxLat: number; minLng: number; maxLng: number } {
    const ring = coordinates[0];

    let minLat = Infinity, maxLat = -Infinity;
    let minLng = Infinity, maxLng = -Infinity;

    for (const [lng, lat] of ring) {
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
        minLng = Math.min(minLng, lng);
        maxLng = Math.max(maxLng, lng);
    }

    return { minLat, maxLat, minLng, maxLng };
}


export function generateWaypoints(
    surveyArea: SurveyArea,
    pattern: MissionPattern,
    config: PatternConfig = {}
): Coordinate[] {
    const bbox = getBoundingBox(surveyArea.coordinates);
    const spacing = config.gridSpacingMeters || 20;

    
    const latSpacing = spacing / 110540;
    const lngSpacing = spacing / (111320 * Math.cos(((bbox.minLat + bbox.maxLat) / 2) * Math.PI / 180));

    const waypoints: Coordinate[] = [];

    switch (pattern) {
        case 'GRID':
            return generateGridWaypoints(bbox, latSpacing, lngSpacing);

        case 'CROSSHATCH':
            const gridWaypoints = generateGridWaypoints(bbox, latSpacing, lngSpacing);
            const angle = config.crosshatchAngleDegrees || 90;
            const crossWaypoints = generateCrosshatchWaypoints(bbox, latSpacing, lngSpacing, angle);
            return [...gridWaypoints, ...crossWaypoints];

        case 'PERIMETER':
            return generatePerimeterWaypoints(surveyArea.coordinates, config.perimeterOffsetMeters || 5);

        default:
            return generateGridWaypoints(bbox, latSpacing, lngSpacing);
    }
}

function generateGridWaypoints(
    bbox: { minLat: number; maxLat: number; minLng: number; maxLng: number },
    latSpacing: number,
    lngSpacing: number
): Coordinate[] {
    const waypoints: Coordinate[] = [];
    let goingRight = true;

    for (let lat = bbox.minLat; lat <= bbox.maxLat; lat += latSpacing) {
        if (goingRight) {
            for (let lng = bbox.minLng; lng <= bbox.maxLng; lng += lngSpacing) {
                waypoints.push({ lat, lng });
            }
        } else {
            for (let lng = bbox.maxLng; lng >= bbox.minLng; lng -= lngSpacing) {
                waypoints.push({ lat, lng });
            }
        }
        goingRight = !goingRight;
    }

    return waypoints;
}

function generateCrosshatchWaypoints(
    bbox: { minLat: number; maxLat: number; minLng: number; maxLng: number },
    latSpacing: number,
    lngSpacing: number,
    _angleDegrees: number
): Coordinate[] {
    
    const waypoints: Coordinate[] = [];
    let goingUp = true;

    for (let lng = bbox.minLng; lng <= bbox.maxLng; lng += lngSpacing) {
        if (goingUp) {
            for (let lat = bbox.minLat; lat <= bbox.maxLat; lat += latSpacing) {
                waypoints.push({ lat, lng });
            }
        } else {
            for (let lat = bbox.maxLat; lat >= bbox.minLat; lat -= latSpacing) {
                waypoints.push({ lat, lng });
            }
        }
        goingUp = !goingUp;
    }

    return waypoints;
}

function generatePerimeterWaypoints(
    coordinates: number[][][],
    _offsetMeters: number
): Coordinate[] {
    const ring = coordinates[0];
    const waypoints: Coordinate[] = [];

    
    for (const [lng, lat] of ring) {
        waypoints.push({ lat, lng });
    }

    
    if (ring.length > 0) {
        waypoints.push({ lat: ring[0][1], lng: ring[0][0] });
    }

    return waypoints;
}


export function calculateFlightDuration(distanceMeters: number, speedMs: number): number {
    if (speedMs <= 0) return 0;
    return Math.ceil(distanceMeters / speedMs);
}
