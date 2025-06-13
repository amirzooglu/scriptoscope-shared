import { z } from "zod";
export declare const GetRequestTemplateValidator: z.ZodObject<{
    id: z.ZodString;
    applicationId: z.ZodOptional<z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
    requestTypeId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    fileUrl: z.ZodOptional<z.ZodString>;
    documentTitle: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    description?: string | undefined;
    documentTitle?: string | undefined;
    name?: string | undefined;
    fileUrl?: string | undefined;
}, {
    id: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    description?: string | undefined;
    documentTitle?: string | undefined;
    name?: string | undefined;
    fileUrl?: string | undefined;
}>;
export type GetRequestTemplateFormValues = z.infer<typeof GetRequestTemplateValidator>;
//# sourceMappingURL=GetRequestTemplateValidator.d.ts.map