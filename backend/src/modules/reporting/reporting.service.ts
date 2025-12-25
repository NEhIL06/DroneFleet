import * as reportingRepo from './reporting.repository';
import { NotFoundError } from '../../shared/http/error-handler';
import { MissionReportResponse, OrganizationSummaryResponse } from '../../shared/types/api';

export async function getMissionReport(missionId: string): Promise<MissionReportResponse> {
    const report = await reportingRepo.getMissionReport(missionId);

    if (!report) {
        throw new NotFoundError('Mission Report', missionId);
    }

    return {
        missionId: report.missionId,
        summary: {
            durationSeconds: report.durationSeconds,
            distanceMeters: report.distanceMeters,
            coverageAreaSqm: report.coverageAreaSqm,
        },
        missionConfig: {
            pattern: report.mission.pattern,
            altitude: report.mission.altitude,
            overlapPercentage: report.mission.overlapPercentage,
        },
        completedAt: report.mission.completedAt?.toISOString() || report.createdAt.toISOString(),
    };
}

export async function getOrganizationSummary(): Promise<OrganizationSummaryResponse> {
    const metrics = await reportingRepo.getOrganizationMetrics();

    return {
        totalMissions: metrics.totalMissions,
        totalFlightTimeSeconds: metrics.totalFlightTimeSeconds,
        averageMissionDurationSeconds: metrics.averageMissionDurationSeconds,
    };
}

export async function getMissionsTrend(days: number = 30) {
    return reportingRepo.getMissionsTrend(days);
}

export async function getRecentCompletedMissions(limit: number = 10) {
    const missions = await reportingRepo.getCompletedMissionsWithReports(limit);

    return missions.map(mission => ({
        missionId: mission.id,
        name: mission.name,
        completedAt: mission.completedAt?.toISOString(),
        droneName: mission.assignedDrone?.name,
        report: mission.report ? {
            durationSeconds: mission.report.durationSeconds,
            distanceMeters: mission.report.distanceMeters,
            coverageAreaSqm: mission.report.coverageAreaSqm,
        } : null,
    }));
}
