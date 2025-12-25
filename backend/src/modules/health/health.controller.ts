import { Request, Response } from 'express';
import { sendSuccess } from '../../shared/http/response';
import prisma from '../../shared/db';
import { asyncWrapper } from '../../shared/utils/asyncWrapper';

export const healthCheck = asyncWrapper(async (_req: Request, res: Response) => {
    const dbHealthy = await checkDatabase();

    const status = {
        status: dbHealthy ? 'healthy' : 'degraded',
        timestamp: new Date().toISOString(),
        services: {
            database: dbHealthy ? 'connected' : 'disconnected',
            telemetry: 'active',
        },
        version: '1.0.0',
    };

    sendSuccess(res, status, dbHealthy ? 200 : 503);
});

async function checkDatabase(): Promise<boolean> {
    try {
        await prisma.$queryRaw`SELECT 1`;
        return true;
    } catch {
        return false;
    }
}
