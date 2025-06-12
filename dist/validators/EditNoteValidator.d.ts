import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addNoteValidationSchema: z.ZodObject<{
    id: z.ZodString;
    noteId: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    lastUpdate: z.ZodOptional<z.ZodDate>;
    noteDate: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: string;
    requestId?: string | undefined;
    noteId?: string | undefined;
    lastUpdate?: Date | undefined;
    noteDate?: Date | undefined;
}, {
    id: string;
    content: string;
    requestId?: string | undefined;
    noteId?: string | undefined;
    lastUpdate?: Date | undefined;
    noteDate?: Date | undefined;
}>;
export type AddNoteFormValues = ZodReturnType<typeof addNoteValidationSchema>;
//# sourceMappingURL=EditNoteValidator.d.ts.map