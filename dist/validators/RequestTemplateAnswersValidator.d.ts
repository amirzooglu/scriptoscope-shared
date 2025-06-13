import { z } from "zod";
export declare const requestTemplateAnswersValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    requestTemplateId: z.ZodString;
    requestId: z.ZodString;
    questionId: z.ZodString;
    answer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    requestTemplateId: string;
    questionId: string;
    answer: string;
    id?: string | undefined;
}, {
    requestId: string;
    requestTemplateId: string;
    questionId: string;
    answer: string;
    id?: string | undefined;
}>;
export type requestTemplateAnswersFormValues = z.infer<typeof requestTemplateAnswersValidationSchema>;
//# sourceMappingURL=RequestTemplateAnswersValidator.d.ts.map