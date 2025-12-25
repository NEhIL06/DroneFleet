import prisma from '../../prisma/client';
import { emitTelemetryUpdate, emitMissionStatusUpdate, emitMissionCompleted } from './telemetry.gateway';
import * as missionRepo from '../mission/mission.repository';

interface Position {
    lat: number;
    lng: number;
}

interface SimulationState {
    missionId: string;
    droneId: string;
    phase: 'TRANSIT_TO_SURVEY' | 'CONDUCTING_SURVEY' | 'TRANSIT_HOME';
    currentPosition: Position;
    homeBase: Position;
    surveyStart: Position;
    waypoints: Position[];
    currentWaypointIndex: number;
    batteryLevel: number;
    distanceTraveled: number;
    totalSurveyDistance: number;
    speed: number;
    altitude: number;
    startTime: number;
}

const activeSimulations = new Map<string, SimulationState>();
const simulationIntervals = new Map<string, NodeJS.Timeout>();

const SIMULATION_INTERVAL_MS = 2000; 
const BATTERY_CONSUMPTION_PER_100M = 0.8; 

function calculateDistance(p1: Position, p2: Position): number {
    const R = 6371000; 
    const lat1 = p1.lat * Math.PI / 180;
    const lat2 = p2.lat * Math.PI / 180;
    const dLat = (p2.lat - p1.lat) * Math.PI / 180;
    const dLng = (p2.lng - p1.lng) * Math.PI / 180;

    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

function calculateHeading(from: Position, to: Position): number {
    const dLng = (to.lng - from.lng) * Math.PI / 180;
    const lat1 = from.lat * Math.PI / 180;
    const lat2 = to.lat * Math.PI / 180;

    const x = Math.sin(dLng) * Math.cos(lat2);
    const y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);

    const bearing = Math.atan2(x, y) * 180 / Math.PI;
    return (bearing + 360) % 360;
}

function interpolatePosition(from: Position, to: Position, fraction: number): Position {
    return {
        lat: from.lat + (to.lat - from.lat) * fraction,
        lng: from.lng + (to.lng - from.lng) * fraction,
    };
}

function generateSurveyData() {
    return {
        airQualityIndex: Math.floor(Math.random() * 50) + 20, 
        temperature: 25 + Math.random() * 10, 
        humidity: 50 + Math.random() * 30, 
        particulateMatter: 10 + Math.random() * 25, 
    };
}

async function simulateTick(state: SimulationState): Promise<boolean> {
    const distancePerTick = state.speed * (SIMULATION_INTERVAL_MS / 1000);
    let target: Position;
    let missionComplete = false;

    switch (state.phase) {
        case 'TRANSIT_TO_SURVEY':
            target = state.waypoints[0];
            break;
        case 'CONDUCTING_SURVEY':
            target = state.waypoints[state.currentWaypointIndex];
            break;
        case 'TRANSIT_HOME':
            target = state.homeBase;
            break;
    }

    const distanceToTarget = calculateDistance(state.currentPosition, target);

    if (distanceToTarget <= distancePerTick) {
        
        state.currentPosition = { ...target };
        state.distanceTraveled += distanceToTarget;
        state.batteryLevel -= (distanceToTarget / 100) * BATTERY_CONSUMPTION_PER_100M;

        if (state.phase === 'TRANSIT_TO_SURVEY') {
            
            state.phase = 'CONDUCTING_SURVEY';
            state.currentWaypointIndex = 0;
            await updateMissionPhase(state.missionId, 'CONDUCTING_SURVEY');
        } else if (state.phase === 'CONDUCTING_SURVEY') {
            
            state.currentWaypointIndex++;
            if (state.currentWaypointIndex >= state.waypoints.length) {
                
                state.phase = 'TRANSIT_HOME';
                await updateMissionPhase(state.missionId, 'TRANSIT_HOME');
            }
        } else if (state.phase === 'TRANSIT_HOME') {
            
            missionComplete = true;
        }
    } else {
        
        const fraction = distancePerTick / distanceToTarget;
        state.currentPosition = interpolatePosition(state.currentPosition, target, fraction);
        state.distanceTraveled += distancePerTick;
        state.batteryLevel -= (distancePerTick / 100) * BATTERY_CONSUMPTION_PER_100M;
    }

    
    let surveyProgress = 0;
    if (state.phase === 'CONDUCTING_SURVEY') {
        surveyProgress = (state.currentWaypointIndex / state.waypoints.length) * 100;
    } else if (state.phase === 'TRANSIT_HOME') {
        surveyProgress = 100;
    }

    
    const distanceToHome = calculateDistance(state.currentPosition, state.homeBase);
    let remainingDistance = distanceToHome;
    if (state.phase === 'CONDUCTING_SURVEY') {
        
        for (let i = state.currentWaypointIndex; i < state.waypoints.length - 1; i++) {
            remainingDistance += calculateDistance(state.waypoints[i], state.waypoints[i + 1]);
        }
        if (state.waypoints.length > 0) {
            remainingDistance += calculateDistance(state.waypoints[state.waypoints.length - 1], state.homeBase);
        }
    }
    const etaSeconds = Math.ceil(remainingDistance / state.speed);

    
    const surveyData = state.phase === 'CONDUCTING_SURVEY' ? generateSurveyData() : null;

    
    const heading = calculateHeading(state.currentPosition, target);

    
    const telemetryData = {
        position: state.currentPosition,
        altitude: state.altitude,
        heading,
        speed: state.speed,
        phase: state.phase,
        progress: Math.min(100, Math.floor(surveyProgress)),
        etaSeconds,
        batteryLevel: Math.max(0, Math.floor(state.batteryLevel)),
        batteryVoltage: 22.2 + (state.batteryLevel / 100) * 3,
        signalStrength: 85 + Math.floor(Math.random() * 15),
        motorTemp: 35 + Math.random() * 15,
        distanceTraveled: state.distanceTraveled,
        distanceRemaining: remainingDistance,
        ...surveyData,
    };

    emitTelemetryUpdate(state.missionId, telemetryData);

    
    await storeTelemetry(state.missionId, telemetryData);

    
    await updateDroneBattery(state.droneId, Math.max(0, Math.floor(state.batteryLevel)));

    return missionComplete;
}

async function storeTelemetry(missionId: string, data: any): Promise<void> {
    try {
        await prisma.missionTelemetry.create({
            data: {
                missionId,
                latitude: data.position.lat,
                longitude: data.position.lng,
                altitude: data.altitude,
                heading: data.heading,
                speed: data.speed,
                phase: data.phase,
                progress: data.progress,
                etaSeconds: data.etaSeconds,
                distanceTraveled: data.distanceTraveled,
                distanceRemaining: data.distanceRemaining,
                batteryLevel: data.batteryLevel,
                batteryVoltage: data.batteryVoltage,
                signalStrength: data.signalStrength,
                motorTemp: data.motorTemp,
                airQualityIndex: data.airQualityIndex,
                temperature: data.temperature,
                humidity: data.humidity,
                particulateMatter: data.particulateMatter,
            },
        });
    } catch (error) {
        console.error('[Simulator] Failed to store telemetry:', error);
    }
}

async function updateMissionPhase(missionId: string, phase: string): Promise<void> {
    try {
        await prisma.mission.update({
            where: { id: missionId },
            data: { phase, phaseStartedAt: new Date() },
        });
        emitMissionStatusUpdate(missionId, phase);
    } catch (error) {
        console.error('[Simulator] Failed to update mission phase:', error);
    }
}

async function updateDroneBattery(droneId: string, batteryLevel: number): Promise<void> {
    try {
        await prisma.drone.update({
            where: { id: droneId },
            data: { batteryLevel, lastSeenAt: new Date() },
        });
    } catch (error) {
        console.error('[Simulator] Failed to update drone battery:', error);
    }
}

export async function startMissionSimulation(missionId: string): Promise<void> {
    console.log(`[Simulator] Attempting to start simulation for mission ${missionId}`);

    try {
        
        const mission = await prisma.mission.findUnique({
            where: { id: missionId },
            include: {
                flightPath: true,
                assignedDrone: true,
            },
        });

        if (!mission) {
            console.error(`[Simulator] Mission ${missionId} not found`);
            return;
        }

        console.log(`[Simulator] Mission found: ${mission.name}`);
        console.log(`[Simulator] Flight path: ${mission.flightPath ? 'exists' : 'missing'}`);
        console.log(`[Simulator] Assigned drone: ${mission.assignedDrone ? mission.assignedDrone.name : 'missing'}`);

        if (!mission.flightPath) {
            console.error('[Simulator] Cannot start simulation: no flight path');
            return;
        }

        if (!mission.assignedDrone) {
            console.error('[Simulator] Cannot start simulation: no assigned drone');
            return;
        }

        const drone = mission.assignedDrone;
        const waypoints = mission.flightPath.waypoints as unknown as Position[];

        if (!waypoints || waypoints.length === 0) {
            console.error('[Simulator] Cannot start simulation: no waypoints');
            return;
        }

        
        const homeBase: Position = { lat: drone.homeBaseLat, lng: drone.homeBaseLng };
        const state: SimulationState = {
            missionId,
            droneId: drone.id,
            phase: 'TRANSIT_TO_SURVEY',
            currentPosition: { ...homeBase },
            homeBase,
            surveyStart: waypoints[0],
            waypoints,
            currentWaypointIndex: 0,
            batteryLevel: drone.batteryLevel,
            distanceTraveled: 0,
            totalSurveyDistance: mission.flightPath.estimatedDistanceMeters,
            speed: mission.speed,
            altitude: mission.altitude,
            startTime: Date.now(),
        };

        activeSimulations.set(missionId, state);

        
        await updateMissionPhase(missionId, 'TRANSIT_TO_SURVEY');

        console.log(`[Simulator] Started simulation for mission ${missionId}`);
        console.log(`[Simulator] Home base: ${homeBase.lat}, ${homeBase.lng}`);
        console.log(`[Simulator] Waypoints: ${waypoints.length}`);

        
        const interval = setInterval(async () => {
            const currentState = activeSimulations.get(missionId);
            if (!currentState) {
                clearInterval(interval);
                return;
            }

            try {
                const isComplete = await simulateTick(currentState);

                if (isComplete) {
                    await completeMission(missionId, currentState);
                    stopMissionSimulation(missionId);
                }
            } catch (error) {
                console.error('[Simulator] Tick error:', error);
            }
        }, SIMULATION_INTERVAL_MS);

        simulationIntervals.set(missionId, interval);
    } catch (error) {
        console.error('[Simulator] Failed to start simulation:', error);
    }
}

async function completeMission(missionId: string, state: SimulationState): Promise<void> {
    const duration = Math.floor((Date.now() - state.startTime) / 1000);

    
    await missionRepo.updateMissionStatus(missionId, 'COMPLETED', {
        completedAt: new Date(),
        phase: 'COMPLETED',
    });

    
    await prisma.missionReport.create({
        data: {
            missionId,
            durationSeconds: duration,
            distanceMeters: state.distanceTraveled,
            coverageAreaSqm: state.totalSurveyDistance * 50, 
        },
    });

    
    await prisma.drone.update({
        where: { id: state.droneId },
        data: { status: 'AVAILABLE' },
    });

    
    emitMissionCompleted(missionId, {
        durationSeconds: duration,
        distanceMeters: state.distanceTraveled,
        coverageAreaSqm: state.totalSurveyDistance * 50,
    });

    console.log(`[Simulator] Mission ${missionId} completed in ${duration}s`);
}

export function stopMissionSimulation(missionId: string): void {
    const interval = simulationIntervals.get(missionId);
    if (interval) {
        clearInterval(interval);
        simulationIntervals.delete(missionId);
    }
    activeSimulations.delete(missionId);
    console.log(`[Simulator] Stopped simulation for mission ${missionId}`);
}

export function pauseMissionSimulation(missionId: string): void {
    const interval = simulationIntervals.get(missionId);
    if (interval) {
        clearInterval(interval);
        simulationIntervals.delete(missionId);
    }
    console.log(`[Simulator] Paused simulation for mission ${missionId}`);
}

export function resumeMissionSimulation(missionId: string): void {
    const state = activeSimulations.get(missionId);
    if (!state) {
        console.error('[Simulator] Cannot resume: no active simulation');
        return;
    }

    const interval = setInterval(async () => {
        const currentState = activeSimulations.get(missionId);
        if (!currentState) {
            clearInterval(interval);
            return;
        }

        try {
            const isComplete = await simulateTick(currentState);
            if (isComplete) {
                await completeMission(missionId, currentState);
                stopMissionSimulation(missionId);
            }
        } catch (error) {
            console.error('[Simulator] Tick error:', error);
        }
    }, SIMULATION_INTERVAL_MS);

    simulationIntervals.set(missionId, interval);
    console.log(`[Simulator] Resumed simulation for mission ${missionId}`);
}

export function getSimulationState(missionId: string): SimulationState | undefined {
    return activeSimulations.get(missionId);
}
