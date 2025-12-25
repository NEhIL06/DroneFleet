import { Router } from 'express';
import * as missionController from './mission.controller';
import { idempotencyMiddleware } from '../../shared/http/middleware';

const router = Router();


router.post('/', missionController.createMission);
router.get('/', missionController.listMissions);
router.get('/:id', missionController.getMission);


router.post('/:id/assign-drone', idempotencyMiddleware, missionController.assignDrone);
router.post('/:id/start', idempotencyMiddleware, missionController.startMission);
router.post('/:id/pause', idempotencyMiddleware, missionController.pauseMission);
router.post('/:id/resume', idempotencyMiddleware, missionController.resumeMission);
router.post('/:id/abort', idempotencyMiddleware, missionController.abortMission);

export default router;
