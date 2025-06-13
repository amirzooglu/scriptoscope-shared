import { z } from "zod";
export declare const requestTemplateQuestionaireAnswerValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    requestTemplateId: z.ZodString;
    requestId: z.ZodString;
    questionId: z.ZodNullable<z.ZodString>;
    fromDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    toDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    minValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    minChar: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxChar: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    requestTemplateId: string;
    questionId: string | null;
    id?: string | undefined;
    fromDate?: Date | null | undefined;
    toDate?: Date | null | undefined;
    minValue?: number | null | undefined;
    maxValue?: number | null | undefined;
    minChar?: number | null | undefined;
    maxChar?: number | null | undefined;
}, {
    requestId: string;
    requestTemplateId: string;
    questionId: string | null;
    id?: string | undefined;
    fromDate?: Date | null | undefined;
    toDate?: Date | null | undefined;
    minValue?: number | null | undefined;
    maxValue?: number | null | undefined;
    minChar?: number | null | undefined;
    maxChar?: number | null | undefined;
}>;
export type RequestTemplateQuestionaireAnswerFormValues = z.infer<typeof requestTemplateQuestionaireAnswerValidationSchema>;
//# sourceMappingURL=RequestTemplateQuestionaireAnswerValidator.d.ts.map