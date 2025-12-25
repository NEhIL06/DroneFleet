import { Response } from 'express';
import { ApiError, ApiResponse } from '../types/api';

export function sendSuccess<T>(res: Response, data: T, statusCode = 200): void {
    const response: ApiResponse<T> = {
        success: true,
        data,
    };
    res.status(statusCode).json(response);
}

export function sendError(res: Response, code: string, message: string, statusCode = 400, details?: Record<string, unknown>): void {
    const error: ApiError = {
        code,
        message,
        details,
    };

    const response: ApiResponse<null> = {
        success: false,
        error,
    };

    res.status(statusCode).json(response);
}

export function sendPaginated<T>(res: Response, items: T[], nextCursor?: string, total?: number): void {
    res.status(200).json({
        success: true,
        data: {
            items,
            nextCursor,
            total,
        },
    });
}
