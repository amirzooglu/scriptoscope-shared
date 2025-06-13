import { z } from "zod";
export declare const editRequestTemplateQuestionaireValidationSchema: z.ZodObject<{
    id: z.ZodString;
    requestTemplateId: z.ZodOptional<z.ZodString>;
    question: z.ZodString;
    fieldDataTypeId: z.ZodOptional<z.ZodString>;
    fieldDataType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    fieldKey: z.ZodString;
    isRequired: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    question: string;
    fieldKey: string;
    isRequired: boolean;
    requestTemplateId?: string | undefined;
    fieldDataTypeId?: string | undefined;
    fieldDataType?: {
        id: string;
        name: string;
    } | undefined;
}, {
    id: string;
    question: string;
    fieldKey: string;
    isRequired: boolean;
    requestTemplateId?: string | undefined;
    fieldDataTypeId?: string | undefined;
    fieldDataType?: {
        id: string;
        name: string;
    } | undefined;
}>;
export type EditRequestTemplateQuestionaireFormValues = z.infer<typeof editRequestTemplateQuestionaireValidationSchema>;
//# sourceMappingURL=EditRequestTemplateQuestionaireValidator.d.ts.map