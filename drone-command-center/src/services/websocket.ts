import { io, Socket } from 'socket.io-client';
import type { TelemetryData } from '@/types';

const WS_URL = 'http://localhost:3000';
const WS_PATH = '/ws/telemetry';

class WebSocketService {
  private socket: Socket | null = null;
  private connectHandlers: (() => void)[] = [];
  private disconnectHandlers: (() => void)[] = [];
  private errorHandlers: ((error: Error) => void)[] = [];
  private telemetryHandlers: Map<string, ((data: TelemetryData) => void)[]> = new Map();
  private statusHandlers: Map<string, ((status: string) => void)[]> = new Map();

  connect(): void {
    if (this.socket?.connected) {
      console.log('Socket.IO already connected');
      return;
    }

    console.log('Connecting to Socket.IO:', WS_URL);

    this.socket = io(WS_URL, {
      path: WS_PATH,
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    this.socket.on('connect', () => {
      console.log('Socket.IO connected:', this.socket?.id);

      
      for (const missionId of this.telemetryHandlers.keys()) {
        if (missionId !== '*') {
          this.socket?.emit('SUBSCRIBE_MISSION', { missionId });
          console.log('Re-subscribed to mission:', missionId);
        }
      }
      if (this.telemetryHandlers.has('*')) {
        this.socket?.emit('SUBSCRIBE_ACTIVE_MISSIONS');
        console.log('Re-subscribed to active missions');
      }

      this.connectHandlers.forEach(handler => handler());
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket.IO disconnected:', reason);
      this.disconnectHandlers.forEach(handler => handler());
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error.message);
      this.errorHandlers.forEach(handler => handler(error));
    });

    
    this.socket.on('TELEMETRY_UPDATE', (data: TelemetryData) => {
      console.log('Telemetry update received:', data);
      const missionId = data.missionId;
      if (missionId) {
        const handlers = this.telemetryHandlers.get(missionId) || [];
        handlers.forEach(handler => handler(data));

        
        const globalHandlers = this.telemetryHandlers.get('*') || [];
        globalHandlers.forEach(handler => handler(data));
      }
    });

    
    this.socket.on('MISSION_STATUS_UPDATE', (data: { missionId: string; status: string }) => {
      console.log('Mission status update:', data);
      const handlers = this.statusHandlers.get(data.missionId) || [];
      handlers.forEach(handler => handler(data.status));
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  
  subscribeToMission(missionId: string, callback: (data: TelemetryData) => void): () => void {
    if (!this.telemetryHandlers.has(missionId)) {
      this.telemetryHandlers.set(missionId, []);
    }
    this.telemetryHandlers.get(missionId)!.push(callback);

    
    if (this.socket?.connected) {
      this.socket.emit('SUBSCRIBE_MISSION', { missionId });
      console.log('Subscribed to mission:', missionId);
    }

    
    return () => {
      const handlers = this.telemetryHandlers.get(missionId);
      if (handlers) {
        const index = handlers.indexOf(callback);
        if (index > -1) {
          handlers.splice(index, 1);
        }
        if (handlers.length === 0) {
          this.telemetryHandlers.delete(missionId);
          if (this.socket?.connected) {
            this.socket.emit('UNSUBSCRIBE_MISSION', { missionId });
          }
        }
      }
    };
  }

  
  subscribeToActiveMissions(callback: (data: TelemetryData) => void): () => void {
    if (!this.telemetryHandlers.has('*')) {
      this.telemetryHandlers.set('*', []);
    }
    this.telemetryHandlers.get('*')!.push(callback);

    if (this.socket?.connected) {
      this.socket.emit('SUBSCRIBE_ACTIVE_MISSIONS');
    }

    return () => {
      const handlers = this.telemetryHandlers.get('*');
      if (handlers) {
        const index = handlers.indexOf(callback);
        if (index > -1) {
          handlers.splice(index, 1);
        }
      }
    };
  }

  
  onConnect(callback: () => void): () => void {
    this.connectHandlers.push(callback);
    
    if (this.socket?.connected) {
      callback();
    }
    return () => {
      const index = this.connectHandlers.indexOf(callback);
      if (index > -1) this.connectHandlers.splice(index, 1);
    };
  }

  onDisconnect(callback: () => void): () => void {
    this.disconnectHandlers.push(callback);
    return () => {
      const index = this.disconnectHandlers.indexOf(callback);
      if (index > -1) this.disconnectHandlers.splice(index, 1);
    };
  }

  onError(callback: (error: Error) => void): () => void {
    this.errorHandlers.push(callback);
    return () => {
      const index = this.errorHandlers.indexOf(callback);
      if (index > -1) this.errorHandlers.splice(index, 1);
    };
  }
}


const wsService = new WebSocketService();
export default wsService;
