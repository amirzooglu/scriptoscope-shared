import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addNoteValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    noteId: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
    taskId: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    lastUpdate: z.ZodOptional<z.ZodDate>;
    noteDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    content: string;
    id?: string | undefined;
    requestId?: string | undefined;
    noteId?: string | undefined;
    taskId?: string | undefined;
    lastUpdate?: Date | undefined;
    noteDate?: Date | undefined;
}, {
    content: string;
    id?: string | undefined;
    requestId?: string | undefined;
    noteId?: string | undefined;
    taskId?: string | undefined;
    lastUpdate?: Date | undefined;
    noteDate?: Date | undefined;
}>;
export type AddNoteFormValues = ZodReturnType<typeof addNoteValidationSchema>;
//# sourceMappingURL=AddNoteValidator.d.ts.map