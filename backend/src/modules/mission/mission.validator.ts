import { z } from 'zod';
import { MissionPattern, AbortReason } from '../../../prisma/generated/client';

const CoordinateSchema = z.tuple([z.number(), z.number()]);

const SurveyAreaSchema = z.object({
    type: z.literal('Polygon'),
    coordinates: z.array(z.array(CoordinateSchema)).min(1),
});

const PatternConfigSchema = z.object({
    gridSpacingMeters: z.number().positive().optional(),
    crosshatchAngleDegrees: z.number().min(0).max(360).optional(),
    perimeterOffsetMeters: z.number().positive().optional(),
}).optional();

export const CreateMissionSchema = z.object({
    name: z.string().min(1).max(200),
    surveyArea: SurveyAreaSchema,
    pattern: z.nativeEnum(MissionPattern),
    altitude: z.number().min(10).max(400),
    overlapPercentage: z.number().min(0).max(100),
    speed: z.number().min(1).max(20),
    patternConfig: PatternConfigSchema,
});

export const AssignDroneSchema = z.object({
    droneId: z.string().uuid(),
});

export const AbortMissionSchema = z.object({
    reason: z.string().max(500).optional(),
});

export const ListMissionsQuerySchema = z.object({
    status: z.nativeEnum({
        CREATED: 'CREATED',
        READY: 'READY',
        IN_PROGRESS: 'IN_PROGRESS',
        PAUSED: 'PAUSED',
        COMPLETED: 'COMPLETED',
        ABORTED: 'ABORTED'
    } as const).optional(),
    limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).optional(),
    cursor: z.string().uuid().optional(),
});

export type CreateMissionInput = z.infer<typeof CreateMissionSchema>;
export type AssignDroneInput = z.infer<typeof AssignDroneSchema>;
export type AbortMissionInput = z.infer<typeof AbortMissionSchema>;
