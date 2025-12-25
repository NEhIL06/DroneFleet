import { DroneStatus } from '../../../prisma/generated/client';
import * as droneRepo from './drone.repository';
import { CreateDroneInput } from './drone.validator';
import { NotFoundError, DroneNotAvailableError, BatteryTooLowError } from '../../shared/http/error-handler';
import { DEFAULTS } from '../../config/constants';
import { DroneResponse } from '../../shared/types/api';

export async function createDrone(input: CreateDroneInput): Promise<DroneResponse> {
    const drone = await droneRepo.createDrone({
        name: input.name,
        batteryLevel: input.batteryLevel,
    });

    return mapDroneToResponse(drone);
}

export async function getDroneById(id: string): Promise<DroneResponse> {
    const drone = await droneRepo.getDroneById(id);

    if (!drone) {
        throw new NotFoundError('Drone', id);
    }

    return mapDroneToResponse(drone);
}

export async function listDrones(status?: DroneStatus): Promise<DroneResponse[]> {
    const drones = await droneRepo.getDrones(status);
    return drones.map(mapDroneToResponse);
}

export async function validateDroneForMission(droneId: string): Promise<void> {
    const drone = await droneRepo.getDroneById(droneId);

    if (!drone) {
        throw new NotFoundError('Drone', droneId);
    }

    if (drone.status !== 'AVAILABLE') {
        throw new DroneNotAvailableError(droneId, drone.status);
    }

    if (drone.batteryLevel < DEFAULTS.BATTERY_THRESHOLD) {
        throw new BatteryTooLowError(droneId, drone.batteryLevel, DEFAULTS.BATTERY_THRESHOLD);
    }
}

export async function lockDrone(droneId: string, _missionId: string): Promise<void> {
    await droneRepo.updateDroneStatus(droneId, 'IN_MISSION', {
        lastSeenAt: new Date(),
    });
}

export async function releaseDrone(droneId: string): Promise<void> {
    await droneRepo.updateDroneStatus(droneId, 'AVAILABLE', {
        lastSeenAt: new Date(),
    });
}

export async function updateBattery(droneId: string, batteryLevel: number): Promise<void> {
    await droneRepo.updateDroneBattery(droneId, batteryLevel);
}

export async function setDroneOffline(droneId: string): Promise<void> {
    await droneRepo.updateDroneStatus(droneId, 'OFFLINE');
}

export async function setDroneOnline(droneId: string): Promise<void> {
    await droneRepo.updateDroneStatus(droneId, 'AVAILABLE', {
        lastSeenAt: new Date(),
        health: 'OK',
    });
}

export async function setDroneHomeBase(droneId: string, lat: number, lng: number): Promise<void> {
    await droneRepo.updateDroneHomeBase(droneId, lat, lng);
}

function mapDroneToResponse(drone: droneRepo.DroneWithMission): DroneResponse {
    return {
        id: drone.id,
        name: drone.name,
        batteryLevel: drone.batteryLevel,
        status: drone.status,
        health: drone.health,
        lastSeen: drone.lastSeenAt?.toISOString(),
        homeBaseLat: drone.homeBaseLat,
        homeBaseLng: drone.homeBaseLng,
    };
}
