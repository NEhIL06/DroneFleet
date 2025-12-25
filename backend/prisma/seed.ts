import 'dotenv/config';
import { PrismaClient } from './generated/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding database...\n');

    // Create drones
    const drones = await Promise.all([
        prisma.drone.create({
            data: {
                name: 'Drone Alpha',
                batteryLevel: 100,
                status: 'AVAILABLE',
                health: 'OK',
                lastSeenAt: new Date(),
            },
        }),
        prisma.drone.create({
            data: {
                name: 'Drone Beta',
                batteryLevel: 85,
                status: 'AVAILABLE',
                health: 'OK',
                lastSeenAt: new Date(),
            },
        }),
        prisma.drone.create({
            data: {
                name: 'Drone Gamma',
                batteryLevel: 92,
                status: 'AVAILABLE',
                health: 'OK',
                lastSeenAt: new Date(),
            },
        }),
        prisma.drone.create({
            data: {
                name: 'Drone Delta',
                batteryLevel: 78,
                status: 'AVAILABLE',
                health: 'OK',
                lastSeenAt: new Date(),
            },
        }),
        prisma.drone.create({
            data: {
                name: 'Drone Epsilon',
                batteryLevel: 65,
                status: 'OFFLINE',
                health: 'MAINTENANCE',
                lastSeenAt: new Date(Date.now() - 86400000), // 1 day ago
            },
        }),
    ]);

    console.log(`✅ Created ${drones.length} drones:`);
    drones.forEach((d: any) => console.log(`   - ${d.name} (${d.status}, ${d.batteryLevel}%)`));

    // Create a sample mission with flight path
    const sampleMission = await prisma.mission.create({
        data: {
            name: 'Sample Warehouse Survey',
            status: 'CREATED',
            pattern: 'GRID',
            altitude: 50,
            overlapPercentage: 70,
            speed: 5,
            surveyArea: {
                type: 'Polygon',
                coordinates: [
                    [
                        [77.5946, 12.9716],
                        [77.5956, 12.9716],
                        [77.5956, 12.9726],
                        [77.5946, 12.9726],
                        [77.5946, 12.9716],
                    ],
                ],
            },
            patternConfig: {
                gridSpacingMeters: 10,
            },
        },
    });

    // Create flight path for the mission
    const waypoints = [
        { lat: 12.9716, lng: 77.5946 },
        { lat: 12.9716, lng: 77.5951 },
        { lat: 12.9716, lng: 77.5956 },
        { lat: 12.9721, lng: 77.5956 },
        { lat: 12.9721, lng: 77.5951 },
        { lat: 12.9721, lng: 77.5946 },
        { lat: 12.9726, lng: 77.5946 },
        { lat: 12.9726, lng: 77.5951 },
        { lat: 12.9726, lng: 77.5956 },
    ];

    await prisma.missionFlightPath.create({
        data: {
            missionId: sampleMission.id,
            waypoints: waypoints,
            waypointCount: waypoints.length,
            estimatedDistanceMeters: 250,
            estimatedDurationSeconds: 50,
        },
    });

    console.log(`\n✅ Created sample mission: ${sampleMission.name}`);

    // Create organization metrics
    await prisma.organizationMetrics.create({
        data: {
            totalMissions: 0,
            totalFlightTimeSeconds: 0,
            averageMissionDurationSeconds: 0,
        },
    });

    console.log('\n✅ Initialized organization metrics');

    console.log('\n🎉 Seeding completed successfully!\n');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);

    })
    .finally(async () => {
        await prisma.$disconnect();
    });
