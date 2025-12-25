import { Router } from 'express';
import * as droneController from './drone.controller';

const router = Router();

router.post('/', droneController.createDrone);
router.get('/', droneController.listDrones);
router.get('/:id', droneController.getDrone);

export default router;
