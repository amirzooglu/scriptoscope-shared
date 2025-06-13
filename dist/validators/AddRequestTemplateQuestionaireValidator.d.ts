import { z } from "zod";
export declare const addRequestTemplateQuestionaireValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    requestTemplateId: z.ZodString;
    question: z.ZodString;
    fieldDataTypeId: z.ZodOptional<z.ZodString>;
    fieldDataType: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>;
    fieldKey: z.ZodString;
    isRequired: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    requestTemplateId: string;
    question: string;
    fieldDataType: {
        id: string;
        name: string;
    };
    fieldKey: string;
    isRequired: boolean;
    id?: string | undefined;
    fieldDataTypeId?: string | undefined;
}, {
    requestTemplateId: string;
    question: string;
    fieldDataType: {
        id: string;
        name: string;
    };
    fieldKey: string;
    isRequired: boolean;
    id?: string | undefined;
    fieldDataTypeId?: string | undefined;
}>;
export type AddRequestTemplateQuestionaireFormValues = z.infer<typeof addRequestTemplateQuestionaireValidationSchema>;
//# sourceMappingURL=AddRequestTemplateQuestionaireValidator.d.ts.map