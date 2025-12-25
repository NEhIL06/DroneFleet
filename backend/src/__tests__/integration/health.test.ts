import request from 'supertest';
import app from '../../app';

describe('Health API', () => {
    describe('GET /api/health', () => {
        it('should return health status', async () => {
            const response = await request(app)
                .get('/api/health')
                .expect('Content-Type', /json/);

            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('status');
            expect(response.body.data).toHaveProperty('timestamp');
            expect(response.body.data).toHaveProperty('services');
            expect(response.body.data).toHaveProperty('version');
        });

        it('should include database and telemetry service status', async () => {
            const response = await request(app).get('/api/health');

            expect(response.body.data.services).toHaveProperty('database');
            expect(response.body.data.services).toHaveProperty('telemetry');
        });
    });

    describe('GET /', () => {
        it('should return API info on root endpoint', async () => {
            const response = await request(app)
                .get('/')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('version');
            expect(response.body.name).toContain('Drone Survey');
        });
    });
});
