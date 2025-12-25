import { z } from 'zod';

export const CreateDroneSchema = z.object({
    name: z.string().min(1).max(100),
    batteryLevel: z.number().min(0).max(100).optional().default(100),
});

export type CreateDroneInput = z.infer<typeof CreateDroneSchema>;
