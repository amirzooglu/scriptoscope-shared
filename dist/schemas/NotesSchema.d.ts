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
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    organizationId: string | null;
    createdBy: string | null;
    updatedBy: string | null;
}, {
    id: string;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    organizationId: string | null;
    createdBy: string | null;
    updatedBy: string | null;
}>;
export type Notes = z.infer<typeof NotesSchema>;
//# sourceMappingURL=NotesSchema.d.ts.map