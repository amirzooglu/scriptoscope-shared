import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addNoteValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    noteId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodString;
    lastUpdate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    noteDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    id?: string | null | undefined;
    noteId?: string | null | undefined;
    requestId?: string | null | undefined;
    taskId?: string | null | undefined;
    lastUpdate?: Date | null | undefined;
    noteDate?: Date | null | undefined;
}, {
    content: string;
    id?: string | null | undefined;
    noteId?: string | null | undefined;
    requestId?: string | null | undefined;
    taskId?: string | null | undefined;
    lastUpdate?: Date | null | undefined;
    noteDate?: Date | null | undefined;
}>;
export type AddNoteFormValues = ZodReturnType<typeof addNoteValidationSchema>;
//# sourceMappingURL=AddNoteValidator.d.ts.map