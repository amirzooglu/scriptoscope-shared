import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addCommentValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    commentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contractId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodString;
    lastUpdate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    commentDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    id?: string | null | undefined;
    commentId?: string | null | undefined;
    contractId?: string | null | undefined;
    taskId?: string | null | undefined;
    lastUpdate?: Date | null | undefined;
    commentDate?: Date | null | undefined;
}, {
    content: string;
    id?: string | null | undefined;
    commentId?: string | null | undefined;
    contractId?: string | null | undefined;
    taskId?: string | null | undefined;
    lastUpdate?: Date | null | undefined;
    commentDate?: Date | null | undefined;
}>;
export type AddCommentFormValues = ZodReturnType<typeof addCommentValidationSchema>;
//# sourceMappingURL=AddCommentValidator.d.ts.map