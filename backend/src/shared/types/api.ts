import { MissionStatus, MissionPattern, DroneStatus, AbortReason } from '../../../prisma/generated/client';





export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: ApiError;
}

export interface PaginatedResponse<T> {
    items: T[];
    nextCursor?: string;
    total?: number;
}





export interface Coordinate {
    lat: number;
    lng: number;
}

export interface SurveyArea {
    type: 'Polygon';
    coordinates: number[][][];
}

export interface PatternConfig {
    gridSpacingMeters?: number;
    crosshatchAngleDegrees?: number;
    perimeterOffsetMeters?: number;
}

export interface FlightPath {
    pattern: MissionPattern;
    waypointCount: number;
    estimatedDistanceMeters: number;
    estimatedDurationSeconds: number;
    waypoints?: Coordinate[];
}

export interface DroneLock {
    lockedAt: string;
    lockedByMissionId: string;
}

export interface CreateMissionRequest {
    name: string;
    surveyArea: SurveyArea;
    pattern: MissionPattern;
    altitude: number;
    overlapPercentage: number;
    speed: number;
    patternConfig?: PatternConfig;
}

export interface CreateMissionResponse {
    id: string;
    status: MissionStatus;
    flightPath: FlightPath;
    createdAt: string;
}

export interface MissionDetailsResponse {
    id: string;
    name: string;
    status: MissionStatus;
    phase?: string;
    surveyArea: SurveyArea;
    flightPath: FlightPath | any;
    assignedDroneId?: string;
    assignedDrone?: {
        id: string;
        name: string;
        batteryLevel: number;
        status: DroneStatus;
        homeBaseLat?: number;
        homeBaseLng?: number;
    };
    progress: number;
    estimatedTimeRemainingSeconds?: number;
    startedAt?: string;
    completedAt?: string;
}

export interface MissionListItem {
    id: string;
    name: string;
    status: MissionStatus;
    assignedDroneId?: string;
    progress?: number;
}

export interface AssignDroneRequest {
    droneId: string;
}

export interface AssignDroneResponse {
    missionId: string;
    assignedDroneId: string;
    droneLock: DroneLock;
    status: MissionStatus;
}

export interface MissionActionResponse {
    missionId: string;
    status: MissionStatus;
    startedAt?: string;
}

export interface AbortMissionRequest {
    reason: AbortReason;
}

export interface AbortMissionResponse {
    missionId: string;
    status: MissionStatus;
    abortReason: AbortReason;
}





export interface CreateDroneRequest {
    name: string;
    batteryLevel?: number;
}

export interface DroneResponse {
    id: string;
    name: string;
    batteryLevel: number;
    status: DroneStatus;
    health: string;
    lastSeen?: string;
    homeBaseLat?: number;
    homeBaseLng?: number;
    maxRange?: number;
}





export interface TelemetryUpdate {
    type: 'TELEMETRY_UPDATE';
    missionId: string;
    position: Coordinate;
    progress: number;
    etaSeconds: number;
}

export interface HeartbeatEvent {
    type: 'HEARTBEAT';
    missionId: string;
    timestamp: string;
}

export interface MissionCompletedEvent {
    type: 'MISSION_COMPLETED';
    missionId: string;
    finalStats: {
        durationSeconds: number;
        distanceMeters: number;
        coverageAreaSqm: number;
    };
    droneReleased: boolean;
}

export interface MissionStatusUpdateEvent {
    type: 'MISSION_STATUS_UPDATE';
    missionId: string;
    status: MissionStatus;
}

export type TelemetryEvent = TelemetryUpdate | HeartbeatEvent | MissionCompletedEvent | MissionStatusUpdateEvent;





export interface MissionReportResponse {
    missionId: string;
    summary: {
        durationSeconds: number;
        distanceMeters: number;
        coverageAreaSqm: number;
    };
    missionConfig: {
        pattern: MissionPattern;
        altitude: number;
        overlapPercentage: number;
    };
    completedAt: string;
}

export interface OrganizationSummaryResponse {
    totalMissions: number;
    totalFlightTimeSeconds: number;
    averageMissionDurationSeconds: number;
}
