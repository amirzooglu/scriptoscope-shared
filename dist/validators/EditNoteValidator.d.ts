import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const editNoteValidationSchema: z.ZodObject<{
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
export type EditNoteFormValues = ZodReturnType<typeof editNoteValidationSchema>;
//# sourceMappingURL=EditNoteValidator.d.ts.map