import * as missionService from '../mission/mission.service';
import * as droneService from '../drone/drone.service';
import * as telemetryGateway from './telemetry.gateway';
import * as missionRepo from '../mission/mission.repository';
import { Coordinate } from '../../shared/types/api';

interface SimulatedMission {
    missionId: string;
    droneId: string;
    waypoints: Coordinate[];
    currentWaypointIndex: number;
    progress: number;
    startedAt: Date;
    totalDurationSeconds: number;
    totalDistanceMeters: number;
    isPaused: boolean;
    
    phase: 'TRANSIT_TO_SURVEY' | 'CONDUCTING_SURVEY' | 'TRANSIT_HOME';
    homeBase: Coordinate;
    altitude: number;
    speed: number;
    distanceTraveled: number;
    batteryLevel: number;
}

const activeMissions = new Map<string, SimulatedMission>();
let simulationInterval: NodeJS.Timeout | null = null;

export function startTelemetrySimulation(): void {
    if (simulationInterval) {
        clearInterval(simulationInterval);
    }

    const intervalMs = parseInt(process.env.TELEMETRY_INTERVAL_MS || '2000');

    simulationInterval = setInterval(async () => {
        await simulateTelemetryTick();
    }, intervalMs);

    console.log(`[Telemetry] Simulation started with ${intervalMs}ms interval`);
}

export function stopTelemetrySimulation(): void {
    if (simulationInterval) {
        clearInterval(simulationInterval);
        simulationInterval = null;
    }
}

async function simulateTelemetryTick(): Promise<void> {
    try {
        const dbMissions = await missionService.getActiveMissions();

        for (const mission of dbMissions) {
            if (mission.status === 'IN_PROGRESS' && !activeMissions.has(mission.id)) {
                await startTrackingMission(mission);
            }
        }

        for (const [missionId, simMission] of activeMissions.entries()) {
            const dbMission = dbMissions.find(m => m.id === missionId);

            if (!dbMission) {
                activeMissions.delete(missionId);
                continue;
            }

            if (dbMission.status === 'PAUSED') {
                simMission.isPaused = true;
                telemetryGateway.emitHeartbeat(missionId);
                continue;
            }

            if (dbMission.status === 'IN_PROGRESS') {
                simMission.isPaused = false;
                await updateMissionTelemetry(simMission);
            }
        }
    } catch (error) {
        console.error('[Telemetry] Simulation tick error:', error);
    }
}

async function startTrackingMission(mission: missionRepo.MissionWithRelations): Promise<void> {
    try {
        const waypoints = await missionService.getMissionFlightPath(mission.id);

        if (waypoints.length === 0) {
            console.warn(`[Telemetry] No waypoints for mission ${mission.id}`);
            return;
        }

        
        let homeBase: Coordinate = { lat: 12.9716, lng: 77.5946 }; 
        let batteryLevel = 100;

        if (mission.assignedDroneId) {
            try {
                const drone = await droneService.getDroneById(mission.assignedDroneId);
                if (drone.homeBaseLat && drone.homeBaseLng) {
                    homeBase = { lat: drone.homeBaseLat, lng: drone.homeBaseLng };
                }
                batteryLevel = drone.batteryLevel;
            } catch (e) {
                console.warn(`[Telemetry] Could not get drone info, using defaults`);
            }
        }

        const simMission: SimulatedMission = {
            missionId: mission.id,
            droneId: mission.assignedDroneId || '',
            waypoints,
            currentWaypointIndex: 0,
            progress: 0,
            startedAt: new Date(),
            totalDurationSeconds: mission.flightPath?.estimatedDurationSeconds || 600,
            totalDistanceMeters: mission.flightPath?.estimatedDistanceMeters || 1000,
            isPaused: false,
            
            phase: 'TRANSIT_TO_SURVEY',
            homeBase,
            altitude: mission.altitude || 50,
            speed: mission.speed || 5,
            distanceTraveled: 0,
            batteryLevel,
        };

        activeMissions.set(mission.id, simMission);
        console.log(`[Telemetry] Started tracking mission ${mission.id}`);
        console.log(`[Telemetry] - Waypoints: ${waypoints.length}, Phase: ${simMission.phase}`);
        console.log(`[Telemetry] - Home base: ${homeBase.lat.toFixed(4)}, ${homeBase.lng.toFixed(4)}`);
    } catch (error) {
        console.error(`[Telemetry] Failed to start tracking mission ${mission.id}:`, error);
    }
}

async function updateMissionTelemetry(simMission: SimulatedMission): Promise<void> {
    try {
        if (simMission.isPaused) return;

        const intervalMs = parseInt(process.env.TELEMETRY_INTERVAL_MS || '2000');
        const progressIncrement = (intervalMs / 1000) / simMission.totalDurationSeconds * 100;

        
        simMission.progress = Math.min(100, simMission.progress + progressIncrement);

        
        if (simMission.progress < 15) {
            simMission.phase = 'TRANSIT_TO_SURVEY';
        } else if (simMission.progress < 85) {
            simMission.phase = 'CONDUCTING_SURVEY';
        } else {
            simMission.phase = 'TRANSIT_HOME';
        }

        
        const waypointProgress = (simMission.progress / 100) * simMission.waypoints.length;
        simMission.currentWaypointIndex = Math.min(
            Math.floor(waypointProgress),
            simMission.waypoints.length - 1
        );

        const currentPosition = simMission.waypoints[simMission.currentWaypointIndex];

        
        let heading = 0;
        if (simMission.currentWaypointIndex < simMission.waypoints.length - 1) {
            const nextWp = simMission.waypoints[simMission.currentWaypointIndex + 1];
            heading = calculateHeading(currentPosition, nextWp);
        }

        
        const distancePerTick = simMission.speed * (intervalMs / 1000);
        simMission.distanceTraveled += distancePerTick;
        simMission.batteryLevel = Math.max(0, simMission.batteryLevel - 0.3);

        const remainingProgress = 100 - simMission.progress;
        const etaSeconds = Math.round((remainingProgress / 100) * simMission.totalDurationSeconds);

        
        const surveyData = simMission.phase === 'CONDUCTING_SURVEY' ? {
            airQualityIndex: Math.floor(Math.random() * 50) + 20,
            temperature: 25 + Math.random() * 10,
            humidity: 50 + Math.random() * 30,
            particulateMatter: 10 + Math.random() * 25,
        } : {};

        
        if (simMission.droneId) {
            try {
                await droneService.updateBattery(simMission.droneId, Math.floor(simMission.batteryLevel));
            } catch (error) {
                
            }
        }

        
        await missionRepo.createTelemetry({
            missionId: simMission.missionId,
            latitude: currentPosition.lat,
            longitude: currentPosition.lng,
            progress: Math.round(simMission.progress),
            etaSeconds,
            waypointIndex: simMission.currentWaypointIndex,
        });

        
        telemetryGateway.emitTelemetryUpdate(simMission.missionId, {
            position: currentPosition,
            altitude: simMission.altitude,
            heading,
            speed: simMission.speed,
            phase: simMission.phase,
            progress: Math.round(simMission.progress),
            etaSeconds,
            batteryLevel: Math.floor(simMission.batteryLevel),
            batteryVoltage: 22.2 + (simMission.batteryLevel / 100) * 3,
            signalStrength: 85 + Math.floor(Math.random() * 15),
            motorTemp: 35 + Math.random() * 15,
            distanceTraveled: Math.round(simMission.distanceTraveled),
            distanceRemaining: Math.round(simMission.totalDistanceMeters - simMission.distanceTraveled),
            ...surveyData,
        });

        console.log(`[Telemetry] Mission ${simMission.missionId}: ${simMission.phase} ${Math.round(simMission.progress)}%`);

        if (simMission.progress >= 100) {
            await completeMissionSimulation(simMission);
        }
    } catch (error) {
        console.error(`[Telemetry] updateMissionTelemetry error for mission ${simMission.missionId}:`, error);
    }
}


function calculateHeading(from: Coordinate, to: Coordinate): number {
    const dLng = (to.lng - from.lng) * Math.PI / 180;
    const lat1 = from.lat * Math.PI / 180;
    const lat2 = to.lat * Math.PI / 180;
    const x = Math.sin(dLng) * Math.cos(lat2);
    const y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    const bearing = Math.atan2(x, y) * 180 / Math.PI;
    return (bearing + 360) % 360;
}

async function completeMissionSimulation(simMission: SimulatedMission): Promise<void> {
    console.log(`[Telemetry] Mission ${simMission.missionId} completed`);

    await missionService.completeMission(simMission.missionId);

    const durationSeconds = Math.round((Date.now() - simMission.startedAt.getTime()) / 1000);
    const distanceMeters = simMission.totalDistanceMeters;
    const coverageAreaSqm = distanceMeters * 10;

    await createMissionReport(simMission.missionId, {
        durationSeconds,
        distanceMeters,
        coverageAreaSqm,
    });

    telemetryGateway.emitMissionCompleted(simMission.missionId, {
        durationSeconds,
        distanceMeters,
        coverageAreaSqm,
    });

    activeMissions.delete(simMission.missionId);
}

async function createMissionReport(missionId: string, stats: {
    durationSeconds: number;
    distanceMeters: number;
    coverageAreaSqm: number;
}): Promise<void> {
    try {
        const prisma = (await import('../../shared/db')).default;
        await prisma.missionReport.upsert({
            where: { missionId },
            create: {
                missionId,
                durationSeconds: stats.durationSeconds,
                distanceMeters: stats.distanceMeters,
                coverageAreaSqm: stats.coverageAreaSqm,
            },
            update: {
                durationSeconds: stats.durationSeconds,
                distanceMeters: stats.distanceMeters,
                coverageAreaSqm: stats.coverageAreaSqm,
            },
        });
    } catch (error) {
        console.error(`[Telemetry] Failed to create/update mission report for ${missionId}:`, error);
    }
}

export function pauseMissionSimulation(missionId: string): void {
    const simMission = activeMissions.get(missionId);
    if (simMission) {
        simMission.isPaused = true;
    }
}

export function resumeMissionSimulation(missionId: string): void {
    const simMission = activeMissions.get(missionId);
    if (simMission) {
        simMission.isPaused = false;
    }
}

export function getActiveMissionIds(): string[] {
    return Array.from(activeMissions.keys());
}
