import request from 'supertest';
import app from '../../app';

// Mock the database module
jest.mock('../../shared/db', () => ({
    __esModule: true,
    default: {
        mission: {
            findMany: jest.fn().mockResolvedValue([]),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
        },
        drone: {
            findMany: jest.fn().mockResolvedValue([]),
            findUnique: jest.fn(),
            update: jest.fn(),
        },
        missionFlightPath: {
            create: jest.fn(),
            findUnique: jest.fn(),
        },
        missionEvent: {
            create: jest.fn(),
        },
        missionTelemetry: {
            findFirst: jest.fn().mockResolvedValue(null),
        },
        $queryRaw: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
    },
}));

describe('Missions API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/missions', () => {
        it('should return list of missions', async () => {
            const response = await request(app)
                .get('/api/missions')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('items');
            expect(Array.isArray(response.body.data.items)).toBe(true);
        });

        it('should support status filter', async () => {
            const response = await request(app)
                .get('/api/missions?status=CREATED')
                .expect(200);

            expect(response.body.success).toBe(true);
        });

        it('should support pagination', async () => {
            const response = await request(app)
                .get('/api/missions?limit=10')
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('items');
        });
    });

    describe('POST /api/missions', () => {
        const validMissionPayload = {
            name: 'Test Mission',
            surveyArea: {
                type: 'Polygon',
                coordinates: [[[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]],
            },
            pattern: 'GRID',
            altitude: 50,
            overlapPercentage: 70,
            speed: 5,
        };

        it('should create a new mission with valid payload', async () => {
            const mockMission = {
                id: 'test-id',
                name: 'Test Mission',
                status: 'CREATED',
                pattern: 'GRID',
                createdAt: new Date(),
            };

            const db = require('../../shared/db').default;
            db.mission.create.mockResolvedValue(mockMission);
            db.missionFlightPath.create.mockResolvedValue({});
            db.missionEvent.create.mockResolvedValue({});

            const response = await request(app)
                .post('/api/missions')
                .send(validMissionPayload)
                .expect('Content-Type', /json/)
                .expect(201);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('missionId');
            expect(response.body.data).toHaveProperty('status');
        });

        it('should reject mission with missing required fields', async () => {
            const response = await request(app)
                .post('/api/missions')
                .send({ name: 'Incomplete Mission' })
                .expect('Content-Type', /json/)
                .expect(400);

            expect(response.body.success).toBe(false);
            expect(response.body.error).toHaveProperty('code');
        });

        it('should reject mission with invalid pattern', async () => {
            const response = await request(app)
                .post('/api/missions')
                .send({ ...validMissionPayload, pattern: 'INVALID_PATTERN' })
                .expect(400);

            expect(response.body.success).toBe(false);
        });
    });

    describe('GET /api/missions/:id', () => {
        it('should return 404 for non-existent mission', async () => {
            const db = require('../../shared/db').default;
            db.mission.findUnique.mockResolvedValue(null);

            const response = await request(app)
                .get('/api/missions/non-existent-id')
                .expect(404);

            expect(response.body.success).toBe(false);
            expect(response.body.error.code).toBe('NOT_FOUND');
        });

        it('should return mission details for valid ID', async () => {
            const mockMission = {
                id: 'test-id',
                name: 'Test Mission',
                status: 'CREATED',
                pattern: 'GRID',
                altitude: 50,
                overlapPercentage: 70,
                speed: 5,
                surveyArea: { type: 'Polygon', coordinates: [] },
                flightPath: {
                    waypointCount: 10,
                    estimatedDistanceMeters: 500,
                    estimatedDurationSeconds: 100,
                },
                assignedDroneId: null,
                startedAt: null,
                completedAt: null,
            };

            const db = require('../../shared/db').default;
            db.mission.findUnique.mockResolvedValue(mockMission);

            const response = await request(app)
                .get('/api/missions/test-id')
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('missionId');
            expect(response.body.data).toHaveProperty('name');
            expect(response.body.data).toHaveProperty('status');
        });
    });

    describe('POST /api/missions/:id/start', () => {
        it('should fail to start mission in CREATED state', async () => {
            const mockMission = {
                id: 'test-id',
                status: 'CREATED',
            };

            const db = require('../../shared/db').default;
            db.mission.findUnique.mockResolvedValue(mockMission);

            const response = await request(app)
                .post('/api/missions/test-id/start')
                .expect(400);

            expect(response.body.success).toBe(false);
            expect(response.body.error.code).toBe('INVALID_STATE_TRANSITION');
        });
    });

    describe('POST /api/missions/:id/abort', () => {
        it('should require abort reason', async () => {
            const mockMission = {
                id: 'test-id',
                status: 'IN_PROGRESS',
                assignedDroneId: 'drone-1',
            };

            const db = require('../../shared/db').default;
            db.mission.findUnique.mockResolvedValue(mockMission);

            const response = await request(app)
                .post('/api/missions/test-id/abort')
                .send({})
                .expect(400);

            expect(response.body.success).toBe(false);
        });
    });
});
