import { z } from 'zod';
export declare const NotesSchema: z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    createdAt: z.ZodNullable<z.ZodDate>;
    updatedAt: z.ZodNullable<z.ZodDate>;
    organizationId: z.ZodNullable<z.ZodString>;
    createdBy: z.ZodNullable<z.ZodString>;
    updatedBy: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    organizationId: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    content: string;
}, {
    id: string;
    organizationId: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    content: string;
}>;
export type Notes = z.infer<typeof NotesSchema>;
//# sourceMappingURL=NotesSchema.d.ts.map