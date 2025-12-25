-- CreateEnum
CREATE TYPE "MissionStatus" AS ENUM ('CREATED', 'READY', 'IN_PROGRESS', 'PAUSED', 'COMPLETED', 'ABORTED');

-- CreateEnum
CREATE TYPE "MissionPattern" AS ENUM ('GRID', 'CROSSHATCH', 'PERIMETER');

-- CreateEnum
CREATE TYPE "AbortReason" AS ENUM ('LOW_BATTERY', 'OPERATOR_ABORT', 'SYSTEM_ERROR');

-- CreateEnum
CREATE TYPE "DroneStatus" AS ENUM ('AVAILABLE', 'IN_MISSION', 'OFFLINE');

-- CreateTable
CREATE TABLE "drones" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "batteryLevel" INTEGER NOT NULL DEFAULT 100,
    "status" "DroneStatus" NOT NULL DEFAULT 'AVAILABLE',
    "health" TEXT NOT NULL DEFAULT 'OK',
    "lastSeenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "drones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "missions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "MissionStatus" NOT NULL DEFAULT 'CREATED',
    "pattern" "MissionPattern" NOT NULL,
    "altitude" INTEGER NOT NULL,
    "overlapPercentage" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "surveyArea" JSONB NOT NULL,
    "patternConfig" JSONB,
    "assignedDroneId" TEXT,
    "abortReason" "AbortReason",
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "pausedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "missions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission_flight_paths" (
    "id" TEXT NOT NULL,
    "missionId" TEXT NOT NULL,
    "waypoints" JSONB NOT NULL,
    "waypointCount" INTEGER NOT NULL,
    "estimatedDistanceMeters" DOUBLE PRECISION NOT NULL,
    "estimatedDurationSeconds" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mission_flight_paths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission_telemetry" (
    "id" BIGSERIAL NOT NULL,
    "missionId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION,
    "progress" INTEGER NOT NULL,
    "etaSeconds" INTEGER,
    "waypointIndex" INTEGER,
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mission_telemetry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission_events" (
    "id" TEXT NOT NULL,
    "missionId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mission_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mission_reports" (
    "id" TEXT NOT NULL,
    "missionId" TEXT NOT NULL,
    "durationSeconds" INTEGER NOT NULL,
    "distanceMeters" DOUBLE PRECISION NOT NULL,
    "coverageAreaSqm" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mission_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization_metrics" (
    "id" TEXT NOT NULL,
    "totalMissions" INTEGER NOT NULL DEFAULT 0,
    "totalFlightTimeSeconds" INTEGER NOT NULL DEFAULT 0,
    "averageMissionDurationSeconds" INTEGER NOT NULL DEFAULT 0,
    "computedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "organization_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "drones_status_idx" ON "drones"("status");

-- CreateIndex
CREATE INDEX "missions_status_idx" ON "missions"("status");

-- CreateIndex
CREATE INDEX "missions_assignedDroneId_idx" ON "missions"("assignedDroneId");

-- CreateIndex
CREATE UNIQUE INDEX "mission_flight_paths_missionId_key" ON "mission_flight_paths"("missionId");

-- CreateIndex
CREATE INDEX "mission_telemetry_missionId_recordedAt_idx" ON "mission_telemetry"("missionId", "recordedAt" DESC);

-- CreateIndex
CREATE INDEX "mission_events_missionId_idx" ON "mission_events"("missionId");

-- CreateIndex
CREATE UNIQUE INDEX "mission_reports_missionId_key" ON "mission_reports"("missionId");

-- AddForeignKey
ALTER TABLE "missions" ADD CONSTRAINT "missions_assignedDroneId_fkey" FOREIGN KEY ("assignedDroneId") REFERENCES "drones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mission_flight_paths" ADD CONSTRAINT "mission_flight_paths_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mission_telemetry" ADD CONSTRAINT "mission_telemetry_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mission_events" ADD CONSTRAINT "mission_events_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mission_reports" ADD CONSTRAINT "mission_reports_missionId_fkey" FOREIGN KEY ("missionId") REFERENCES "missions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
