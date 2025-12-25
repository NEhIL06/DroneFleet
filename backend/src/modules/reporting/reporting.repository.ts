import prisma from '../../shared/db';

export async function getMissionReport(missionId: string) {
    return prisma.missionReport.findUnique({
        where: { missionId },
        include: {
            mission: {
                select: {
                    name: true,
                    pattern: true,
                    altitude: true,
                    overlapPercentage: true,
                    completedAt: true,
                },
            },
        },
    });
}

export async function getOrganizationMetrics() {
    
    const [missionStats, flightTimeStats] = await Promise.all([
        prisma.mission.count({
            where: { status: 'COMPLETED' },
        }),
        prisma.missionReport.aggregate({
            _sum: {
                durationSeconds: true,
            },
            _avg: {
                durationSeconds: true,
            },
        }),
    ]);

    return {
        totalMissions: missionStats,
        totalFlightTimeSeconds: flightTimeStats._sum.durationSeconds || 0,
        averageMissionDurationSeconds: Math.round(flightTimeStats._avg.durationSeconds || 0),
    };
}

export async function getMissionsTrend(days: number = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    return prisma.mission.groupBy({
        by: ['status'],
        where: {
            createdAt: { gte: startDate },
        },
        _count: true,
    });
}

export async function getCompletedMissionsWithReports(limit: number = 10) {
    return prisma.mission.findMany({
        where: { status: 'COMPLETED' },
        include: {
            report: true,
            assignedDrone: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
        orderBy: { completedAt: 'desc' },
        take: limit,
    });
}
