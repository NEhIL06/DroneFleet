import request from 'supertest';
import app from '../../app';

// Mock the database module
jest.mock('../../shared/db', () => ({
    __esModule: true,
    default: {
        drone: {
            findMany: jest.fn().mockResolvedValue([]),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        $queryRaw: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
    },
}));

describe('Drones API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/drones', () => {
        it('should return list of drones', async () => {
            const mockDrones = [
                {
                    id: 'drone-1',
                    name: 'Drone Alpha',
                    batteryLevel: 100,
                    status: 'AVAILABLE',
                    health: 'OK',
                    lastSeenAt: new Date(),
                },
                {
                    id: 'drone-2',
                    name: 'Drone Beta',
                    batteryLevel: 85,
                    status: 'IN_MISSION',
                    health: 'OK',
                    lastSeenAt: new Date(),
                },
            ];

            const db = require('../../shared/db').default;
            db.drone.findMany.mockResolvedValue(mockDrones);

            const response = await request(app)
                .get('/api/drones')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);
        });

        it('should filter drones by status', async () => {
            const db = require('../../shared/db').default;
            db.drone.findMany.mockResolvedValue([]);

            const response = await request(app)
                .get('/api/drones?status=AVAILABLE')
                .expect(200);

            expect(response.body.success).toBe(true);
        });
    });

    describe('POST /api/drones', () => {
        it('should create a new drone', async () => {
            const mockDrone = {
                id: 'new-drone',
                name: 'New Drone',
                batteryLevel: 100,
                status: 'AVAILABLE',
                health: 'OK',
                lastSeenAt: new Date(),
            };

            const db = require('../../shared/db').default;
            db.drone.create.mockResolvedValue(mockDrone);

            const response = await request(app)
                .post('/api/drones')
                .send({ name: 'New Drone', batteryLevel: 100 })
                .expect('Content-Type', /json/)
                .expect(201);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('id');
            expect(response.body.data).toHaveProperty('name');
        });

        it('should reject drone with missing name', async () => {
            const response = await request(app)
                .post('/api/drones')
                .send({ batteryLevel: 100 })
                .expect(400);

            expect(response.body.success).toBe(false);
        });
    });

    describe('GET /api/drones/:id', () => {
        it('should return 404 for non-existent drone', async () => {
            const db = require('../../shared/db').default;
            db.drone.findUnique.mockResolvedValue(null);

            const response = await request(app)
                .get('/api/drones/non-existent-id')
                .expect(404);

            expect(response.body.success).toBe(false);
            expect(response.body.error.code).toBe('NOT_FOUND');
        });

        it('should return drone details for valid ID', async () => {
            const mockDrone = {
                id: 'drone-1',
                name: 'Drone Alpha',
                batteryLevel: 100,
                status: 'AVAILABLE',
                health: 'OK',
                lastSeenAt: new Date(),
            };

            const db = require('../../shared/db').default;
            db.drone.findUnique.mockResolvedValue(mockDrone);

            const response = await request(app)
                .get('/api/drones/drone-1')
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('id');
            expect(response.body.data).toHaveProperty('name');
            expect(response.body.data).toHaveProperty('batteryLevel');
            expect(response.body.data).toHaveProperty('status');
        });
    });
});
