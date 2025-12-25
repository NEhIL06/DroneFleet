import { Request, Response, NextFunction } from 'express';


const idempotencyCache = new Map<string, {
    response: any;
    statusCode: number;
    timestamp: number;
}>();


const CACHE_TTL = 24 * 60 * 60 * 1000;


setInterval(() => {
    const now = Date.now();
    for (const [key, value] of idempotencyCache.entries()) {
        if (now - value.timestamp > CACHE_TTL) {
            idempotencyCache.delete(key);
        }
    }
}, 60 * 60 * 1000); 


export function idempotencyMiddleware(req: Request, res: Response, next: NextFunction) {
    
    if (req.method !== 'POST') {
        return next();
    }

    const idempotencyKey = req.headers['idempotency-key'] as string;

    
    if (!idempotencyKey) {
        return next();
    }

    
    const cached = idempotencyCache.get(idempotencyKey);
    if (cached) {
        console.log(`[Idempotency] Returning cached response for key: ${idempotencyKey}`);
        return res.status(cached.statusCode).json(cached.response);
    }

    
    const originalJson = res.json.bind(res);

    
    res.json = (body: any) => {
        
        idempotencyCache.set(idempotencyKey, {
            response: body,
            statusCode: res.statusCode,
            timestamp: Date.now(),
        });
        console.log(`[Idempotency] Cached response for key: ${idempotencyKey}`);

        return originalJson(body);
    };

    next();
}


export function getIdempotencyCacheStats() {
    return {
        size: idempotencyCache.size,
        keys: Array.from(idempotencyCache.keys()),
    };
}
