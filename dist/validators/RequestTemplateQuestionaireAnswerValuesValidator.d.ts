import { z } from "zod";
export declare const requestTemplateQuestionaireAnswerValuesValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    answerId: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    answerId: string;
    id?: string | undefined;
}, {
    value: string;
    answerId: string;
    id?: string | undefined;
}>;
export type RequestTemplateQuestionaireAnswerValuesFormValues = z.infer<typeof requestTemplateQuestionaireAnswerValuesValidationSchema>;
//# sourceMappingURL=RequestTemplateQuestionaireAnswerValuesValidator.d.ts.map