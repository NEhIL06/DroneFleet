import request from 'supertest';
import app from '../../app';

// Mock the database module
jest.mock('../../shared/db', () => ({
    __esModule: true,
    default: {
        mission: {
            findUnique: jest.fn(),
            findMany: jest.fn().mockResolvedValue([]),
        },
        missionReport: {
            findUnique: jest.fn(),
        },
        organizationMetrics: {
            findFirst: jest.fn(),
        },
        $queryRaw: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
    },
}));

describe('Reports API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/reports/missions/:id', () => {
        it('should return mission report for valid ID', async () => {
            const mockMission = {
                id: 'mission-1',
                name: 'Test Mission',
                pattern: 'GRID',
                altitude: 50,
                overlapPercentage: 70,
                completedAt: new Date(),
            };

            const mockReport = {
                missionId: 'mission-1',
                durationSeconds: 3600,
                distanceMeters: 5000,
                coverageAreaSqm: 10000,
            };

            const db = require('../../shared/db').default;
            db.mission.findUnique.mockResolvedValue(mockMission);
            db.missionReport.findUnique.mockResolvedValue(mockReport);

            const response = await request(app)
                .get('/api/reports/missions/mission-1')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('missionId');
        });

        it('should return 404 for non-existent mission', async () => {
            const db = require('../../shared/db').default;
            db.mission.findUnique.mockResolvedValue(null);

            const response = await request(app)
                .get('/api/reports/missions/non-existent')
                .expect(404);

            expect(response.body.success).toBe(false);
        });
    });

    describe('GET /api/reports/organization', () => {
        it('should return organization summary', async () => {
            const mockMetrics = {
                totalMissions: 100,
                totalFlightTimeSeconds: 360000,
                averageMissionDurationSeconds: 3600,
            };

            const db = require('../../shared/db').default;
            db.organizationMetrics.findFirst.mockResolvedValue(mockMetrics);

            const response = await request(app)
                .get('/api/reports/organization')
                .expect('Content-Type', /json/)
                .expect(200);

            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('totalMissions');
            expect(response.body.data).toHaveProperty('totalFlightTimeSeconds');
        });

        it('should return default values when no metrics exist', async () => {
            const db = require('../../shared/db').default;
            db.organizationMetrics.findFirst.mockResolvedValue(null);

            const response = await request(app)
                .get('/api/reports/organization')
                .expect(200);

            expect(response.body.success).toBe(true);
        });
    });

    describe('GET /api/reports/trend', () => {
        it('should return missions trend data', async () => {
            const db = require('../../shared/db').default;
            db.mission.findMany.mockResolvedValue([]);

            const response = await request(app)
                .get('/api/reports/trend')
                .expect(200);

            expect(response.body.success).toBe(true);
        });

        it('should accept days parameter', async () => {
            const db = require('../../shared/db').default;
            db.mission.findMany.mockResolvedValue([]);

            const response = await request(app)
                .get('/api/reports/trend?days=7')
                .expect(200);

            expect(response.body.success).toBe(true);
        });
    });

    describe('GET /api/reports/recent', () => {
        it('should return recent completed missions', async () => {
            const db = require('../../shared/db').default;
            db.mission.findMany.mockResolvedValue([]);

            const response = await request(app)
                .get('/api/reports/recent')
                .expect(200);

            expect(response.body.success).toBe(true);
        });

        it('should accept limit parameter', async () => {
            const db = require('../../shared/db').default;
            db.mission.findMany.mockResolvedValue([]);

            const response = await request(app)
                .get('/api/reports/recent?limit=5')
                .expect(200);

            expect(response.body.success).toBe(true);
        });
    });
});
