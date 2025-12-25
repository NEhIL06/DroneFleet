import { PAGINATION } from '../../config/constants';

export interface PaginationParams {
    cursor?: string;
    limit: number;
}

export interface PaginationResult<T> {
    items: T[];
    nextCursor?: string;
}

export function parsePaginationParams(query: Record<string, unknown>): PaginationParams {
    const limit = Math.min(
        parseInt(query.limit as string) || PAGINATION.DEFAULT_LIMIT,
        PAGINATION.MAX_LIMIT
    );

    const cursor = query.cursor as string | undefined;

    return { cursor, limit };
}

export function createNextCursor<T extends { id: string }>(items: T[], limit: number): string | undefined {
    if (items.length < limit) {
        return undefined;
    }

    const lastItem = items[items.length - 1];
    return lastItem ? lastItem.id : undefined;
}
