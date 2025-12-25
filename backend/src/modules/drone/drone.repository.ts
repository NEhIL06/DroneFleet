import prisma from '../../shared/db';
import { DroneStatus } from '../../../prisma/generated/client';

export interface DroneWithMission {
    id: string;
    name: string;
    batteryLevel: number;
    status: DroneStatus;
    health: string;
    lastSeenAt: Date | null;
    homeBaseLat: number;
    homeBaseLng: number;
    maxRange: number;
    createdAt: Date;
    updatedAt: Date;
    missions: {
        id: string;
        name: string;
        status: string;
    }[];
}

export async function createDrone(data: {
    name: string;
    batteryLevel?: number;
}): Promise<DroneWithMission> {
    return prisma.drone.create({
        data: {
            name: data.name,
            batteryLevel: data.batteryLevel ?? 100,
        },
        include: {
            missions: {
                where: {
                    status: { in: ['IN_PROGRESS', 'PAUSED', 'READY'] },
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                },
            },
        },
    });
}

export async function getDroneById(id: string): Promise<DroneWithMission | null> {
    return prisma.drone.findUnique({
        where: { id },
        include: {
            missions: {
                where: {
                    status: { in: ['IN_PROGRESS', 'PAUSED', 'READY'] },
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                },
            },
        },
    });
}

export async function getDrones(status?: DroneStatus): Promise<DroneWithMission[]> {
    return prisma.drone.findMany({
        where: status ? { status } : undefined,
        include: {
            missions: {
                where: {
                    status: { in: ['IN_PROGRESS', 'PAUSED', 'READY'] },
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },
    });
}

export async function updateDroneStatus(
    id: string,
    status: DroneStatus,
    additionalData?: {
        batteryLevel?: number;
        lastSeenAt?: Date;
        health?: string;
    }
): Promise<DroneWithMission> {
    return prisma.drone.update({
        where: { id },
        data: {
            status,
            ...additionalData,
        },
        include: {
            missions: {
                where: {
                    status: { in: ['IN_PROGRESS', 'PAUSED', 'READY'] },
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                },
            },
        },
    });
}

export async function updateDroneBattery(id: string, batteryLevel: number) {
    return prisma.drone.update({
        where: { id },
        data: {
            batteryLevel,
            lastSeenAt: new Date(),
        },
    });
}

export async function updateDroneHomeBase(id: string, lat: number, lng: number) {
    return prisma.drone.update({
        where: { id },
        data: {
            homeBaseLat: lat,
            homeBaseLng: lng,
        },
    });
}

export async function getAvailableDrones(): Promise<DroneWithMission[]> {
    return prisma.drone.findMany({
        where: {
            status: 'AVAILABLE',
            batteryLevel: { gte: 20 },
        },
        include: {
            missions: {
                where: {
                    status: { in: ['IN_PROGRESS', 'PAUSED', 'READY'] },
                },
                select: {
                    id: true,
                    name: true,
                    status: true,
                },
            },
        },
    });
}
