import { create } from 'zustand';
import type { Mission, TelemetryData, GeoJSONPolygon } from '@/types';

interface MissionState {
  // Active mission being viewed
  activeMission: Mission | null;
  setActiveMission: (mission: Mission | null) => void;
  
  // Telemetry data for live monitoring
  telemetry: TelemetryData | null;
  setTelemetry: (data: TelemetryData | null) => void;
  
  // WebSocket connection status
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
  
  // Mission planner state
  drawnPolygon: GeoJSONPolygon | null;
  setDrawnPolygon: (polygon: GeoJSONPolygon | null) => void;
  clearDrawnPolygon: () => void;
  
  // Filter state for missions list
  statusFilter: string | null;
  setStatusFilter: (status: string | null) => void;
  
  // Reset store
  reset: () => void;
}

const initialState = {
  activeMission: null,
  telemetry: null,
  isConnected: false,
  drawnPolygon: null,
  statusFilter: null,
};

export const useMissionStore = create<MissionState>((set) => ({
  ...initialState,
  
  setActiveMission: (mission) => set({ activeMission: mission }),
  
  setTelemetry: (data) => set({ telemetry: data }),
  
  setIsConnected: (connected) => set({ isConnected: connected }),
  
  setDrawnPolygon: (polygon) => set({ drawnPolygon: polygon }),
  
  clearDrawnPolygon: () => set({ drawnPolygon: null }),
  
  setStatusFilter: (status) => set({ statusFilter: status }),
  
  reset: () => set(initialState),
}));
