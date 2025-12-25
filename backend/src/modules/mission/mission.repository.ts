import prisma from '../../shared/db';
import { MissionStatus, MissionPattern, Prisma, AbortReason, DroneStatus } from '../../../prisma/generated/client';
import { PaginationParams } from '../../shared/utils/pagination';

export interface MissionWithRelations {
    id: string;
    name: string;
    status: MissionStatus;
    pattern: MissionPattern;
    altitude: number;
    overlapPercentage: number;
    speed: number;
    surveyArea: Prisma.JsonValue;
    patternConfig: Prisma.JsonValue | null;
    assignedDroneId: string | null;
    abortReason: AbortReason | null;
    startedAt: Date | null;
    completedAt: Date | null;
    pausedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    flightPath: {
        waypointCount: number;
        estimatedDistanceMeters: number;
        estimatedDurationSeconds: number;
        waypoints: Prisma.JsonValue;
    } | null;
    assignedDrone: {
        id: string;
        name: string;
        batteryLevel: number;
        status: DroneStatus;
    } | null;
}

export async function createMission(data: {
    name: string;
    surveyArea: object;
    pattern: MissionPattern;
    altitude: number;
    overlapPercentage: number;
    speed: number;
    patternConfig?: object | null;
}): Promise<MissionWithRelations> {
    return prisma.mission.create({
        data: {
            name: data.name,
            surveyArea: data.surveyArea,
            pattern: data.pattern,
            altitude: data.altitude,
            overlapPercentage: data.overlapPercentage,
            speed: data.speed,
            patternConfig: data.patternConfig || undefined,
        },
        include: {
            flightPath: true,
            assignedDrone: true,
        },
    }) as unknown as Promise<MissionWithRelations>;
}

export async function createFlightPath(data: {
    missionId: string;
    waypoints: object;
    waypointCount: number;
    estimatedDistanceMeters: number;
    estimatedDurationSeconds: number;
}) {
    return prisma.missionFlightPath.create({
        data: {
            missionId: data.missionId,
            waypoints: data.waypoints,
            waypointCount: data.waypointCount,
            estimatedDistanceMeters: data.estimatedDistanceMeters,
            estimatedDurationSeconds: data.estimatedDurationSeconds,
        },
    });
}

export async function getMissionById(id: string): Promise<MissionWithRelations | null> {
    return prisma.mission.findUnique({
        where: { id },
        include: {
            flightPath: true,
            assignedDrone: true,
        },
    }) as unknown as Promise<MissionWithRelations | null>;
}

export async function getMissions(
    params: PaginationParams,
    status?: MissionStatus
): Promise<MissionWithRelations[]> {
    return prisma.mission.findMany({
        where: {
            ...(status && { status }),
            ...(params.cursor && { id: { lt: params.cursor } }),
        },
        include: {
            flightPath: true,
            assignedDrone: true,
        },
        orderBy: { createdAt: 'desc' },
        take: params.limit,
    }) as unknown as Promise<MissionWithRelations[]>;
}

export async function updateMissionStatus(
    id: string,
    status: MissionStatus,
    additionalData?: {
        startedAt?: Date;
        completedAt?: Date;
        pausedAt?: Date | null;
        abortReason?: AbortReason;
        abortReasonText?: string;
        assignedDroneId?: string;
        phase?: string;
        phaseStartedAt?: Date;
    }
): Promise<MissionWithRelations> {
    return prisma.mission.update({
        where: { id },
        data: {
            status,
            ...additionalData,
        },
        include: {
            flightPath: true,
            assignedDrone: true,
        },
    }) as unknown as Promise<MissionWithRelations>;
}

export async function getActiveMissions(): Promise<MissionWithRelations[]> {
    return prisma.mission.findMany({
        where: {
            status: { in: ['IN_PROGRESS', 'PAUSED'] },
        },
        include: {
            flightPath: true,
            assignedDrone: true,
        },
    }) as unknown as Promise<MissionWithRelations[]>;
}

export async function createMissionEvent(data: {
    missionId: string;
    eventType: string;
    payload?: object;
}) {
    return prisma.missionEvent.create({
        data: {
            missionId: data.missionId,
            eventType: data.eventType,
            payload: data.payload || undefined,
        },
    });
}

export async function getLatestTelemetry(missionId: string) {
    return prisma.missionTelemetry.findFirst({
        where: { missionId },
        orderBy: { recordedAt: 'desc' },
    });
}

export async function createTelemetry(data: {
    missionId: string;
    latitude: number;
    longitude: number;
    altitude?: number;
    progress: number;
    etaSeconds?: number;
    waypointIndex?: number;
}) {
    return prisma.missionTelemetry.create({
        data,
    });
}


export async function updateMissionStatusWithEvent(
    id: string,
    status: MissionStatus,
    eventType: string,
    additionalData?: {
        startedAt?: Date;
        completedAt?: Date;
        pausedAt?: Date | null;
        abortReason?: AbortReason;
        abortReasonText?: string;
        assignedDroneId?: string;
        phase?: string;
        phaseStartedAt?: Date;
    },
    eventPayload?: object
): Promise<MissionWithRelations> {
    return prisma.$transaction(async (tx) => {
        
        const updatedMission = await tx.mission.update({
            where: { id },
            data: {
                status,
                ...additionalData,
            },
            include: {
                flightPath: true,
                assignedDrone: true,
            },
        });

        
        await tx.missionEvent.create({
            data: {
                missionId: id,
                eventType,
                payload: eventPayload || undefined,
            },
        });

        return updatedMission as unknown as MissionWithRelations;
    });
}

