import { z } from "zod";
import { ZodReturnType } from "../utils/types";
import { DocumentFormatTypeEnum } from "../constants/documentFormatTypes";
export declare const addRequestTemplateValidationSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    organizationId: z.ZodOptional<z.ZodString>;
    applicationId: z.ZodOptional<z.ZodString>;
    requestTypeId: z.ZodOptional<z.ZodString>;
    requestType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    fileUrl: z.ZodOptional<z.ZodString>;
    storagePath: z.ZodOptional<z.ZodString>;
    storageObjectId: z.ZodOptional<z.ZodString>;
    documentKey: z.ZodOptional<z.ZodString>;
    documentFormat: z.ZodOptional<z.ZodNativeEnum<typeof DocumentFormatTypeEnum>>;
    documentFormatTypeId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id?: string | undefined;
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    description?: string | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    storageObjectId?: string | undefined;
    documentKey?: string | undefined;
    documentFormat?: DocumentFormatTypeEnum | undefined;
    documentFormatTypeId?: string | undefined;
    requestType?: {
        id: string;
        name: string;
    } | undefined;
}, {
    name: string;
    id?: string | undefined;
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    description?: string | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    storageObjectId?: string | undefined;
    documentKey?: string | undefined;
    documentFormat?: DocumentFormatTypeEnum | undefined;
    documentFormatTypeId?: string | undefined;
    requestType?: {
        id: string;
        name: string;
    } | undefined;
}>;
export type AddRequestTemplateFormValues = ZodReturnType<typeof addRequestTemplateValidationSchema>;
//# sourceMappingURL=AddRequestTemplateValidator.d.ts.map