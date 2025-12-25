import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HTTPServer } from 'http';
import { TELEMETRY_EVENTS } from '../../config/constants';
import * as telemetryService from './telemetry.service';

let io: SocketIOServer;

export function initializeWebSocket(httpServer: HTTPServer): SocketIOServer {
    io = new SocketIOServer(httpServer, {
        cors: {
            origin: process.env.CORS_ORIGIN || '*',
            methods: ['GET', 'POST'],
        },
        path: '/ws/telemetry',
    });

    io.on('connection', (socket: Socket) => {
        console.log(`[WebSocket] Client connected: ${socket.id}`);

        socket.on(TELEMETRY_EVENTS.SUBSCRIBE_MISSION, (data: { missionId: string }) => {
            handleSubscribeMission(socket, data.missionId);
        });

        socket.on(TELEMETRY_EVENTS.UNSUBSCRIBE_MISSION, (data: { missionId: string }) => {
            handleUnsubscribeMission(socket, data.missionId);
        });

        socket.on(TELEMETRY_EVENTS.SUBSCRIBE_ACTIVE_MISSIONS, () => {
            handleSubscribeActiveMissions(socket);
        });

        socket.on('disconnect', () => {
            console.log(`[WebSocket] Client disconnected: ${socket.id}`);
        });
    });

    
    telemetryService.startTelemetrySimulation();

    return io;
}

function handleSubscribeMission(socket: Socket, missionId: string): void {
    const room = `mission:${missionId}`;
    socket.join(room);
    console.log(`[WebSocket] ${socket.id} subscribed to ${room}`);
}

function handleUnsubscribeMission(socket: Socket, missionId: string): void {
    const room = `mission:${missionId}`;
    socket.leave(room);
    console.log(`[WebSocket] ${socket.id} unsubscribed from ${room}`);
}

function handleSubscribeActiveMissions(socket: Socket): void {
    socket.join('active-missions');
    console.log(`[WebSocket] ${socket.id} subscribed to active-missions`);
}

export function emitTelemetryUpdate(missionId: string, data: {
    position: { lat: number; lng: number };
    altitude?: number;
    heading?: number;
    speed?: number;
    phase?: string;
    progress: number;
    etaSeconds: number;
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
}): void {
    if (!io) return;

    const event = {
        type: TELEMETRY_EVENTS.TELEMETRY_UPDATE,
        missionId,
        timestamp: new Date().toISOString(),
        ...data,
    };

    io.to(`mission:${missionId}`).emit(TELEMETRY_EVENTS.TELEMETRY_UPDATE, event);
    io.to('active-missions').emit(TELEMETRY_EVENTS.TELEMETRY_UPDATE, event);
}

export function emitHeartbeat(missionId: string): void {
    if (!io) return;

    const event = {
        type: TELEMETRY_EVENTS.HEARTBEAT,
        missionId,
        timestamp: new Date().toISOString(),
    };

    io.to(`mission:${missionId}`).emit(TELEMETRY_EVENTS.HEARTBEAT, event);
}

export function emitMissionStatusUpdate(missionId: string, status: string): void {
    if (!io) return;

    const event = {
        type: TELEMETRY_EVENTS.MISSION_STATUS_UPDATE,
        missionId,
        status,
    };

    io.to(`mission:${missionId}`).emit(TELEMETRY_EVENTS.MISSION_STATUS_UPDATE, event);
    io.to('active-missions').emit(TELEMETRY_EVENTS.MISSION_STATUS_UPDATE, event);
}

export function emitMissionCompleted(missionId: string, finalStats: {
    durationSeconds: number;
    distanceMeters: number;
    coverageAreaSqm: number;
}): void {
    if (!io) return;

    const event = {
        type: TELEMETRY_EVENTS.MISSION_COMPLETED,
        missionId,
        finalStats,
        droneReleased: true,
    };

    io.to(`mission:${missionId}`).emit(TELEMETRY_EVENTS.MISSION_COMPLETED, event);
    io.to('active-missions').emit(TELEMETRY_EVENTS.MISSION_COMPLETED, event);
}

export function getIO(): SocketIOServer | undefined {
    return io;
}
