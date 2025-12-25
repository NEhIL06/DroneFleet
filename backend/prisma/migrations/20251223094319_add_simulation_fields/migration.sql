-- AlterTable
ALTER TABLE "drones" ADD COLUMN     "homeBaseLat" DOUBLE PRECISION NOT NULL DEFAULT 12.9716,
ADD COLUMN     "homeBaseLng" DOUBLE PRECISION NOT NULL DEFAULT 77.5946,
ADD COLUMN     "maxRange" DOUBLE PRECISION NOT NULL DEFAULT 10000;

-- AlterTable
ALTER TABLE "mission_telemetry" ADD COLUMN     "airQualityIndex" INTEGER,
ADD COLUMN     "batteryLevel" INTEGER,
ADD COLUMN     "batteryVoltage" DOUBLE PRECISION,
ADD COLUMN     "distanceRemaining" DOUBLE PRECISION,
ADD COLUMN     "distanceTraveled" DOUBLE PRECISION,
ADD COLUMN     "heading" DOUBLE PRECISION,
ADD COLUMN     "humidity" DOUBLE PRECISION,
ADD COLUMN     "motorTemp" DOUBLE PRECISION,
ADD COLUMN     "particulateMatter" DOUBLE PRECISION,
ADD COLUMN     "phase" TEXT,
ADD COLUMN     "signalStrength" INTEGER,
ADD COLUMN     "speed" DOUBLE PRECISION,
ADD COLUMN     "temperature" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "missions" ADD COLUMN     "abortReasonText" TEXT,
ADD COLUMN     "phase" TEXT,
ADD COLUMN     "phaseStartedAt" TIMESTAMP(3);
