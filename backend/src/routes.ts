import { Router } from 'express';
import missionRoutes from './modules/mission/mission.routes';
import droneRoutes from './modules/drone/drone.routes';
import reportingRoutes from './modules/reporting/reporting.routes';
import healthRoutes from './modules/health/health.routes';

const router = Router();


router.use('/missions', missionRoutes);
router.use('/drones', droneRoutes);
router.use('/reports', reportingRoutes);
router.use('/health', healthRoutes);

export default router;
