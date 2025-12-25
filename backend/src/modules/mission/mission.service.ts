import { MissionStatus, AbortReason } from '../../../prisma/generated/client';
import * as missionRepo from './mission.repository';
import * as droneService from '../drone/drone.service';
import { validateTransition, getNextState } from './mission.state-machine';
import { CreateMissionInput, AbortMissionInput } from './mission.validator';
import { NotFoundError } from '../../shared/http/error-handler';
import { MISSION_EVENT_TYPES } from '../../config/constants';
import {
    generateWaypoints,
    calculatePathDistance,
    calculateFlightDuration,
} from '../../shared/utils/geo';
import { PaginationParams } from '../../shared/utils/pagination';
import {
    CreateMissionResponse,
    MissionDetailsResponse,
    MissionListItem,
    AssignDroneResponse,
    MissionActionResponse,
    AbortMissionResponse,
    SurveyArea,
    PatternConfig,
    Coordinate
} from '../../shared/types/api';

export async function createMission(input: CreateMissionInput): Promise<CreateMissionResponse> {
    const mission = await missionRepo.createMission({
        name: input.name,
        surveyArea: input.surveyArea as object,
        pattern: input.pattern,
        altitude: input.altitude,
        overlapPercentage: input.overlapPercentage,
        speed: input.speed,
        patternConfig: (input.patternConfig as object) || null,
    });

    const waypoints = generateWaypoints(
        input.surveyArea as SurveyArea,
        input.pattern,
        input.patternConfig as PatternConfig
    );

    const distanceMeters = calculatePathDistance(waypoints);
    const durationSeconds = calculateFlightDuration(distanceMeters, input.speed);

    await missionRepo.createFlightPath({
        missionId: mission.id,
        waypoints: waypoints as unknown as object,
        waypointCount: waypoints.length,
        estimatedDistanceMeters: distanceMeters,
        estimatedDurationSeconds: durationSeconds,
    });

    await missionRepo.createMissionEvent({
        missionId: mission.id,
        eventType: MISSION_EVENT_TYPES.MISSION_CREATED,
        payload: { pattern: input.pattern, altitude: input.altitude },
    });

    return {
        id: mission.id,
        status: mission.status,
        flightPath: {
            pattern: input.pattern,
            waypointCount: waypoints.length,
            estimatedDistanceMeters: Math.round(distanceMeters),
            estimatedDurationSeconds: durationSeconds,
        },
        createdAt: mission.createdAt.toISOString(),
    };
}

export async function getMissionById(id: string): Promise<MissionDetailsResponse> {
    const mission = await missionRepo.getMissionById(id);

    if (!mission) {
        throw new NotFoundError('Mission', id);
    }

    const telemetry = await missionRepo.getLatestTelemetry(id);
    const progress = telemetry?.progress || 0;

    let estimatedTimeRemainingSeconds: number | undefined;
    if (mission.flightPath && mission.status === 'IN_PROGRESS') {
        const totalSeconds = mission.flightPath.estimatedDurationSeconds;
        estimatedTimeRemainingSeconds = Math.max(0, Math.round(totalSeconds * (1 - progress / 100)));
    }

    return {
        id: mission.id,
        name: mission.name,
        status: mission.status,
        phase: (mission as any).phase,
        surveyArea: mission.surveyArea as unknown as SurveyArea,
        flightPath: mission.flightPath ? {
            pattern: mission.pattern,
            waypointCount: mission.flightPath.waypointCount,
            estimatedDistanceMeters: mission.flightPath.estimatedDistanceMeters,
            estimatedDurationSeconds: mission.flightPath.estimatedDurationSeconds,
            coordinates: mission.flightPath.waypoints,
        } as any : {
            pattern: mission.pattern,
            waypointCount: 0,
            estimatedDistanceMeters: 0,
            estimatedDurationSeconds: 0,
        },
        assignedDroneId: mission.assignedDroneId || undefined,
        assignedDrone: mission.assignedDrone ? {
            id: mission.assignedDrone.id,
            name: mission.assignedDrone.name,
            batteryLevel: mission.assignedDrone.batteryLevel,
            status: mission.assignedDrone.status,
            homeBaseLat: (mission.assignedDrone as any).homeBaseLat,
            homeBaseLng: (mission.assignedDrone as any).homeBaseLng,
        } : undefined,
        progress,
        estimatedTimeRemainingSeconds,
        startedAt: mission.startedAt?.toISOString(),
        completedAt: mission.completedAt?.toISOString(),
    };
}

export async function listMissions(
    params: PaginationParams,
    status?: MissionStatus
): Promise<MissionListItem[]> {
    const missions = await missionRepo.getMissions(params, status);

    return missions.map(mission => ({
        id: mission.id,
        name: mission.name,
        status: mission.status,
        assignedDroneId: mission.assignedDroneId || undefined,
    }));
}

export async function assignDrone(missionId: string, droneId: string): Promise<AssignDroneResponse> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission) {
        throw new NotFoundError('Mission', missionId);
    }

    validateTransition(mission.status, 'ASSIGN_DRONE');
    await droneService.validateDroneForMission(droneId);

    
    const surveyArea = mission.surveyArea as { coordinates: number[][][] };
    let homeBaseLat = 12.9716; 
    let homeBaseLng = 77.5946;

    if (surveyArea?.coordinates?.[0]?.[0]) {
        
        const coords = surveyArea.coordinates[0];
        const centerLng = coords.reduce((sum, c) => sum + c[0], 0) / coords.length;
        const centerLat = coords.reduce((sum, c) => sum + c[1], 0) / coords.length;

        
        const distanceKm = 1 + Math.random() * 2; 
        const angle = Math.random() * 2 * Math.PI; 
        const latOffset = (distanceKm / 111) * Math.cos(angle); 
        const lngOffset = (distanceKm / (111 * Math.cos(centerLat * Math.PI / 180))) * Math.sin(angle);

        homeBaseLat = centerLat + latOffset;
        homeBaseLng = centerLng + lngOffset;
    }

    
    await droneService.setDroneHomeBase(droneId, homeBaseLat, homeBaseLng);

    const newStatus = getNextState(mission.status, 'ASSIGN_DRONE');
    const updatedMission = await missionRepo.updateMissionStatus(missionId, newStatus, {
        assignedDroneId: droneId,
    });

    await droneService.lockDrone(droneId, missionId);

    await missionRepo.createMissionEvent({
        missionId,
        eventType: MISSION_EVENT_TYPES.DRONE_ASSIGNED,
        payload: { droneId, homeBaseLat, homeBaseLng },
    });

    return {
        missionId: updatedMission.id,
        assignedDroneId: droneId,
        droneLock: {
            lockedAt: new Date().toISOString(),
            lockedByMissionId: missionId,
        },
        status: updatedMission.status,
    };
}

export async function startMission(missionId: string): Promise<MissionActionResponse> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission) {
        throw new NotFoundError('Mission', missionId);
    }

    validateTransition(mission.status, 'START');

    const newStatus = getNextState(mission.status, 'START');

    
    const updatedMission = await missionRepo.updateMissionStatusWithEvent(
        missionId,
        newStatus,
        MISSION_EVENT_TYPES.MISSION_STARTED,
        {
            startedAt: new Date(),
            pausedAt: null,
            phase: 'TRANSIT_TO_SURVEY',
            phaseStartedAt: new Date(),
        }
    );

    

    return {
        missionId: updatedMission.id,
        status: updatedMission.status,
        startedAt: updatedMission.startedAt?.toISOString(),
    };
}

export async function pauseMission(missionId: string): Promise<MissionActionResponse> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission) {
        throw new NotFoundError('Mission', missionId);
    }

    validateTransition(mission.status, 'PAUSE');

    const newStatus = getNextState(mission.status, 'PAUSE');

    
    const updatedMission = await missionRepo.updateMissionStatusWithEvent(
        missionId,
        newStatus,
        MISSION_EVENT_TYPES.MISSION_PAUSED,
        { pausedAt: new Date() }
    );

    

    return {
        missionId: updatedMission.id,
        status: updatedMission.status,
    };
}

export async function resumeMission(missionId: string): Promise<MissionActionResponse> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission) {
        throw new NotFoundError('Mission', missionId);
    }

    validateTransition(mission.status, 'RESUME');

    const newStatus = getNextState(mission.status, 'RESUME');

    
    const updatedMission = await missionRepo.updateMissionStatusWithEvent(
        missionId,
        newStatus,
        MISSION_EVENT_TYPES.MISSION_RESUMED,
        { pausedAt: null }
    );

    

    return {
        missionId: updatedMission.id,
        status: updatedMission.status,
    };
}

export async function abortMission(missionId: string, input: AbortMissionInput): Promise<AbortMissionResponse> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission) {
        throw new NotFoundError('Mission', missionId);
    }

    validateTransition(mission.status, 'ABORT');

    const newStatus = getNextState(mission.status, 'ABORT');

    
    const updatedMission = await missionRepo.updateMissionStatusWithEvent(
        missionId,
        newStatus,
        MISSION_EVENT_TYPES.MISSION_ABORTED,
        {
            abortReasonText: input.reason || 'User aborted',
            completedAt: new Date(),
        },
        { reason: input.reason }
    );

    

    if (mission.assignedDroneId) {
        await droneService.releaseDrone(mission.assignedDroneId);
    }

    return {
        missionId: updatedMission.id,
        status: updatedMission.status,
        abortReason: input.reason as AbortReason,
    };
}

export async function completeMission(missionId: string): Promise<void> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission) {
        throw new NotFoundError('Mission', missionId);
    }

    validateTransition(mission.status, 'COMPLETE');

    const newStatus = getNextState(mission.status, 'COMPLETE');
    await missionRepo.updateMissionStatus(missionId, newStatus, {
        completedAt: new Date(),
    });

    if (mission.assignedDroneId) {
        await droneService.releaseDrone(mission.assignedDroneId);
    }

    await missionRepo.createMissionEvent({
        missionId,
        eventType: MISSION_EVENT_TYPES.MISSION_COMPLETED,
    });
}

export async function getActiveMissions() {
    return missionRepo.getActiveMissions();
}

export async function getMissionFlightPath(missionId: string): Promise<Coordinate[]> {
    const mission = await missionRepo.getMissionById(missionId);

    if (!mission || !mission.flightPath) {
        return [];
    }

    return mission.flightPath.waypoints as unknown as Coordinate[];
}
