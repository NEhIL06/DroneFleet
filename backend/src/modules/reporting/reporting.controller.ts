import { asyncWrapper } from '../../shared/utils/asyncWrapper';
import * as reportingService from './reporting.service';
import { sendSuccess } from '../../shared/http/response';

export const getMissionReport = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const result = await reportingService.getMissionReport(id);
    sendSuccess(res, result);
});

export const getOrganizationSummary = asyncWrapper(async (req, res) => {
    const result = await reportingService.getOrganizationSummary();
    sendSuccess(res, result);
});

export const getMissionsTrend = asyncWrapper(async (req, res) => {
    const days = parseInt(req.query.days as string) || 30;
    const result = await reportingService.getMissionsTrend(days);
    sendSuccess(res, result);
});

export const getRecentMissions = asyncWrapper(async (req, res) => {
    const limit = parseInt(req.query.limit as string) || 10;
    const result = await reportingService.getRecentCompletedMissions(limit);
    sendSuccess(res, result);
});
