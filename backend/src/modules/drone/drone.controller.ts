import { asyncWrapper } from '../../shared/utils/asyncWrapper';
import * as droneService from './drone.service';
import { CreateDroneSchema } from './drone.validator';
import { sendSuccess } from '../../shared/http/response';
import { DroneStatus } from '../../../prisma/generated/client';

export const createDrone = asyncWrapper(async (req, res) => {
    const input = CreateDroneSchema.parse(req.body);
    const result = await droneService.createDrone(input);
    sendSuccess(res, result, 201);
});

export const getDrone = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await droneService.getDroneById(id);
    sendSuccess(res, result);
});

export const listDrones = asyncWrapper(async (req, res) => {
    const status = req.query.status as DroneStatus | undefined;
    const result = await droneService.listDrones(status);
    sendSuccess(res, result);
});
