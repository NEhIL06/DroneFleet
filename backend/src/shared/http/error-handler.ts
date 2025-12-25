import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { sendError } from './response';

export class AppError extends Error {
    constructor(
        public code: string,
        public message: string,
        public statusCode: number = 400,
        public details?: Record<string, unknown>
    ) {
        super(message);
        this.name = 'AppError';
    }
}

export class NotFoundError extends AppError {
    constructor(resource: string, id: string) {
        super('NOT_FOUND', `${resource} with id '${id}' not found`, 404);
    }
}

export class ValidationError extends AppError {
    constructor(message: string, details?: Record<string, unknown>) {
        super('VALIDATION_ERROR', message, 400, details);
    }
}

export class InvalidStateTransitionError extends AppError {
    constructor(currentState: string, attemptedAction: string) {
        super(
            'INVALID_STATE_TRANSITION',
            `Cannot perform '${attemptedAction}' on mission in '${currentState}' state`,
            400,
            { currentState, attemptedAction }
        );
    }
}

export class DroneNotAvailableError extends AppError {
    constructor(droneId: string, currentStatus: string) {
        super(
            'DRONE_NOT_AVAILABLE',
            `Drone '${droneId}' is not available (current status: ${currentStatus})`,
            400,
            { droneId, currentStatus }
        );
    }
}

export class BatteryTooLowError extends AppError {
    constructor(droneId: string, batteryLevel: number, threshold: number) {
        super(
            'BATTERY_TOO_LOW',
            `Drone '${droneId}' battery level (${batteryLevel}%) is below threshold (${threshold}%)`,
            400,
            { droneId, batteryLevel, threshold }
        );
    }
}

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction): void {
    console.error(`[ERROR] ${req.method} ${req.path}:`, err.message);
    console.error('[ERROR] Stack:', err.stack);

    if (err instanceof AppError) {
        sendError(res, err.code, err.message, err.statusCode, err.details);
        return;
    }

    if (err instanceof ZodError) {
        const details = err.errors.reduce((acc, e) => {
            acc[e.path.join('.')] = e.message;
            return acc;
        }, {} as Record<string, string>);

        sendError(res, 'VALIDATION_ERROR', 'Invalid request data', 400, details);
        return;
    }

    
    if (err.name === 'PrismaClientKnownRequestError') {
        sendError(res, 'DATABASE_ERROR', 'Database operation failed', 500);
        return;
    }

    
    sendError(res, 'INTERNAL_ERROR', 'An unexpected error occurred', 500);
}
