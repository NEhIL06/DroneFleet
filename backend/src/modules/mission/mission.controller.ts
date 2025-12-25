import { asyncWrapper } from '../../shared/utils/asyncWrapper';
import * as missionService from './mission.service';
import { CreateMissionSchema, AssignDroneSchema, AbortMissionSchema } from './mission.validator';
import { sendSuccess, sendPaginated } from '../../shared/http/response';
import { parsePaginationParams, createNextCursor } from '../../shared/utils/pagination';
import { MissionStatus } from '../../../prisma/generated/client';

export const createMission = asyncWrapper(async (req, res) => {
    const input = CreateMissionSchema.parse(req.body);
    const result = await missionService.createMission(input);
    sendSuccess(res, result, 201);
    return;
});

export const getMission = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await missionService.getMissionById(id);
    sendSuccess(res, result);
    return;
});

export const listMissions = asyncWrapper(async (req, res) => {
    const paginationParams = parsePaginationParams(req.query);
    const status = req.query.status as MissionStatus | undefined;
    const missions = await missionService.listMissions(paginationParams, status);
    const nextCursor = createNextCursor(
        missions.map(m => ({ id: m.id })),
        paginationParams.limit
    );
    sendPaginated(res, missions, nextCursor);
    return;
});

export const assignDrone = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const input = AssignDroneSchema.parse(req.body);
    const result = await missionService.assignDrone(id, input.droneId);
    sendSuccess(res, result);
    return;
});

export const startMission = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await missionService.startMission(id);
    sendSuccess(res, result);   
    return;
});

export const pauseMission = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await missionService.pauseMission(id);
    sendSuccess(res, result);   
    return;
});

export const resumeMission = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await missionService.resumeMission(id);
    sendSuccess(res, result);
    return;
});

export const abortMission = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const input = AbortMissionSchema.parse(req.body);
    const result = await missionService.abortMission(id, input);
    sendSuccess(res, result);
    return;
});
