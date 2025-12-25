import { Router } from 'express';
import * as reportingController from './reporting.controller';

const router = Router();

router.get('/missions/:id', reportingController.getMissionReport);
router.get('/organization', reportingController.getOrganizationSummary);
router.get('/trend', reportingController.getMissionsTrend);
router.get('/recent', reportingController.getRecentMissions);

export default router;
