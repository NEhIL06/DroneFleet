import axios from 'axios';
import type {
  Mission,
  CreateMissionPayload,
  Drone,
  MissionReport,
  OrganizationReport,
} from '@/types';

const API_BASE_URL = 'http://localhost:3000';


const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});


axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[API] <-- ${response.config.method?.toUpperCase()} ${response.config.url} - ${response.status}`);

    const data = response.data;

    
    if (data?.success && data?.data !== undefined) {
      
      if (data.data?.items !== undefined) {
        return data.data.items;
      }
      return data.data;
    }

    return data;
  },
  (error) => {
    console.error(`[API] Error:`, error.message);

    if (error.response?.data?.error) {
      throw new Error(error.response.data.error.message || 'API Error');
    }

    throw error;
  }
);


axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`[API] --> ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export const getMissions = async (): Promise<Mission[]> => {
  return axiosInstance.get('/api/missions');
};

export const getMission = async (id: string): Promise<Mission> => {
  return axiosInstance.get(`/api/missions/${id}`);
};

export const createMission = async (payload: CreateMissionPayload): Promise<Mission> => {
  return axiosInstance.post('/api/missions', payload);
};

export const startMission = async (id: string): Promise<Mission> => {
  return axiosInstance.post(`/api/missions/${id}/start`);
};

export const pauseMission = async (id: string): Promise<Mission> => {
  return axiosInstance.post(`/api/missions/${id}/pause`);
};

export const resumeMission = async (id: string): Promise<Mission> => {
  return axiosInstance.post(`/api/missions/${id}/resume`);
};

export const abortMission = async (id: string, reason?: string): Promise<Mission> => {
  return axiosInstance.post(`/api/missions/${id}/abort`, { reason });
};

export const assignDrone = async (missionId: string, droneId: string): Promise<Mission> => {
  return axiosInstance.post(`/api/missions/${missionId}/assign-drone`, { droneId });
};


export const getDrones = async (): Promise<Drone[]> => {
  return axiosInstance.get('/api/drones');
};


export const getMissionReport = async (missionId: string): Promise<MissionReport> => {
  return axiosInstance.get(`/api/reports/missions/${missionId}`);
};

export const getOrganizationReport = async (): Promise<OrganizationReport> => {
  return axiosInstance.get('/api/reports/organization');
};


const api = {
  getMissions,
  getMission,
  createMission,
  startMission,
  pauseMission,
  resumeMission,
  abortMission,
  assignDrone,
  getDrones,
  getMissionReport,
  getOrganizationReport,
};

export default api;
