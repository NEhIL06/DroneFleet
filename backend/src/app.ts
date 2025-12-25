import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { errorHandler } from './shared/http/error-handler';
import { requestIdMiddleware, loggingMiddleware } from './shared/http/middleware';
import { idempotencyMiddleware } from './shared/middleware/idempotency';

const app = express();


app.use(helmet());


const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:8080';

const cleanOrigin = corsOrigin.replace(/[\[\]\"']/g, '').split(',')[0].trim();

app.use(cors({
    origin: cleanOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Idempotency-Key', 'X-Request-Id'],
    credentials: true,
}));


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


app.use(requestIdMiddleware);
app.use(loggingMiddleware);


app.use(idempotencyMiddleware);


app.use('/api', routes);


app.get('/', (_req, res) => {
    res.json({
        name: 'Drone Survey Management System API',
        version: '1.0.0',
        documentation: '/api/health',
    });
});


app.use(errorHandler);


app.use((_req, res) => {
    res.status(404).json({
        success: false,
        error: {
            code: 'NOT_FOUND',
            message: 'The requested resource was not found',
        },
    });
});

export default app;
