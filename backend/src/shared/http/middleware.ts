import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';


export interface RequestWithId extends Request {
    requestId?: string;
}

export function requestIdMiddleware(req: RequestWithId, _res: Response, next: NextFunction): void {
    req.requestId = req.headers['x-request-id'] as string || uuidv4();
    next();
}

export function loggingMiddleware(req: RequestWithId, res: Response, next: NextFunction): void {
    const start = Date.now();

    
    console.log(`[${req.requestId}] --> ${req.method} ${req.path}`);
    if (Object.keys(req.query).length > 0) {
        console.log(`[${req.requestId}]     Query: ${JSON.stringify(req.query)}`);
    }
    if (req.body && Object.keys(req.body).length > 0) {
        console.log(`[${req.requestId}]     Body: ${JSON.stringify(req.body).slice(0, 200)}`);
    }

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${req.requestId}] <-- ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`);
    });

    next();
}


const idempotencyCache = new Map<string, { response: unknown; timestamp: number }>();
const IDEMPOTENCY_TTL = 24 * 60 * 60 * 1000; 

export function idempotencyMiddleware(req: Request, res: Response, next: NextFunction): void {
    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (!idempotencyKey) {
        next();
        return;
    }

    const cached = idempotencyCache.get(idempotencyKey);

    if (cached && Date.now() - cached.timestamp < IDEMPOTENCY_TTL) {
        res.status(200).json(cached.response);
        return;
    }

    
    const originalJson = res.json.bind(res);

    res.json = (body: unknown) => {
        idempotencyCache.set(idempotencyKey, {
            response: body,
            timestamp: Date.now(),
        });
        return originalJson(body);
    };

    next();
}


setInterval(() => {
    const now = Date.now();
    for (const [key, value] of idempotencyCache.entries()) {
        if (now - value.timestamp > IDEMPOTENCY_TTL) {
            idempotencyCache.delete(key);
        }
    }
}, 60 * 60 * 1000); 
