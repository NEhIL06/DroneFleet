
export type MissionStatus =
  | 'CREATED'
  | 'READY'
  | 'IN_PROGRESS'
  | 'PAUSED'
  | 'COMPLETED'
  | 'ABORTED';

export type MissionPattern = 'GRID' | 'CROSSHATCH' | 'PERIMETER';

export interface GeoJSONPolygon {
  type: 'Polygon';
  coordinates: number[][][];
}

export interface PatternConfig {
  gridSpacing?: number;
  crosshatchAngle?: number;
  perimeterOffset?: number;
}

export interface Mission {
  id: string;
  name: string;
  status: MissionStatus;
  pattern?: MissionPattern;
  altitude?: number;
  overlapPercentage?: number;
  speed?: number;
  patternConfig?: PatternConfig;
  surveyArea?: GeoJSONPolygon;
  flightPath?: GeoJSONPolygon;
  assignedDroneId?: string;
  assignedDrone?: Drone;
  phase?: string;
  progress?: number;
  eta?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateMissionPayload {
  name: string;
  pattern: MissionPattern;
  altitude: number;
  overlapPercentage: number;
  speed: number;
  patternConfig: PatternConfig;
  surveyArea: GeoJSONPolygon;
}


export type DroneStatus = 'AVAILABLE' | 'IN_MISSION' | 'MAINTENANCE' | 'OFFLINE';

export interface Drone {
  id: string;
  name: string;
  status: DroneStatus;
  batteryLevel: number;
  health: string;
  lastSeen: string;
  model?: string;
  serialNumber?: string;
  homeBaseLat?: number;
  homeBaseLng?: number;
  maxRange?: number;
}


export interface TelemetryData {
  missionId: string;
  droneId?: string;
  position: {
    lat: number;
    lng: number;
    altitude?: number;
  };
  altitude?: number;
  speed?: number;
  heading?: number;
  phase?: 'TRANSIT_TO_SURVEY' | 'CONDUCTING_SURVEY' | 'TRANSIT_HOME';
  progress: number;
  etaSeconds?: number;
  eta?: string;
  timestamp?: string;

  
  batteryLevel?: number;
  batteryVoltage?: number;
  signalStrength?: number;
  motorTemp?: number;

  
  distanceTraveled?: number;
  distanceRemaining?: number;

  
  airQualityIndex?: number;
  temperature?: number;
  humidity?: number;
  particulateMatter?: number;
}

export type WebSocketMessageType =
  | 'SUBSCRIBE_MISSION'
  | 'UNSUBSCRIBE_MISSION'
  | 'TELEMETRY_UPDATE'
  | 'HEARTBEAT'
  | 'MISSION_COMPLETED';

export interface WebSocketMessage {
  type: WebSocketMessageType;
  missionId?: string;
  data?: TelemetryData;
}


export interface MissionReport {
  missionId: string;
  missionName: string;
  duration: number;
  distance: number;
  coverageArea: number;
  configuration: {
    pattern: MissionPattern;
    altitude: number;
    overlap: number;
    speed: number;
  };
  completedAt: string;
}

export interface OrganizationReport {
  totalMissions: number;
  totalFlightTime: number;
  averageDuration: number;
  missionsThisMonth: number;
  missionsByStatus: Record<MissionStatus, number>;
  flightTimeByMonth: Array<{
    month: string;
    hours: number;
  }>;
}


export interface ApiError {
  message: string;
  code: string;
  status: number;
}
