import { z } from "zod";
import { ZodReturnType } from "../utils/types";
import { DocumentFormatTypeEnum } from "../constants/documentFormatTypes";
export declare const addDocumentValidationSchema: z.ZodEffects<z.ZodObject<{
    documentTitle: z.ZodString;
    requestId: z.ZodOptional<z.ZodString>;
    taskId: z.ZodOptional<z.ZodString>;
    documentSourceTypeId: z.ZodOptional<z.ZodString>;
    documentTypeId: z.ZodOptional<z.ZodString>;
    documentType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    documentUploadTypeId: z.ZodOptional<z.ZodString>;
    documentUploadType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    documentTags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    fileUrl: z.ZodOptional<z.ZodString>;
    storagePath: z.ZodOptional<z.ZodString>;
    storageObjectId: z.ZodOptional<z.ZodString>;
    embeddingStatus: z.ZodDefault<z.ZodOptional<z.ZodEnum<["PENDING", "PROCESSING", "FAILED", "SUCCESS"]>>>;
    documentKey: z.ZodOptional<z.ZodString>;
    documentFormat: z.ZodOptional<z.ZodNativeEnum<typeof DocumentFormatTypeEnum>>;
    documentFormatTypeId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    documentTitle: string;
    embeddingStatus: "PENDING" | "PROCESSING" | "FAILED" | "SUCCESS";
    notes?: string | undefined;
    requestId?: string | undefined;
    taskId?: string | undefined;
    documentSourceTypeId?: string | undefined;
    documentTypeId?: string | undefined;
    documentType?: {
        id: string;
        name: string;
    } | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    documentTags?: {
        id: string;
        name: string;
    }[] | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    storageObjectId?: string | undefined;
    documentKey?: string | undefined;
    documentFormat?: DocumentFormatTypeEnum | undefined;
    documentFormatTypeId?: string | undefined;
}, {
    documentTitle: string;
    notes?: string | undefined;
    requestId?: string | undefined;
    taskId?: string | undefined;
    documentSourceTypeId?: string | undefined;
    documentTypeId?: string | undefined;
    documentType?: {
        id: string;
        name: string;
    } | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    documentTags?: {
        id: string;
        name: string;
    }[] | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    storageObjectId?: string | undefined;
    embeddingStatus?: "PENDING" | "PROCESSING" | "FAILED" | "SUCCESS" | undefined;
    documentKey?: string | undefined;
    documentFormat?: DocumentFormatTypeEnum | undefined;
    documentFormatTypeId?: string | undefined;
}>, {
    documentTitle: string;
    embeddingStatus: "PENDING" | "PROCESSING" | "FAILED" | "SUCCESS";
    notes?: string | undefined;
    requestId?: string | undefined;
    taskId?: string | undefined;
    documentSourceTypeId?: string | undefined;
    documentTypeId?: string | undefined;
    documentType?: {
        id: string;
        name: string;
    } | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    documentTags?: {
        id: string;
        name: string;
    }[] | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    storageObjectId?: string | undefined;
    documentKey?: string | undefined;
    documentFormat?: DocumentFormatTypeEnum | undefined;
    documentFormatTypeId?: string | undefined;
}, {
    documentTitle: string;
    notes?: string | undefined;
    requestId?: string | undefined;
    taskId?: string | undefined;
    documentSourceTypeId?: string | undefined;
    documentTypeId?: string | undefined;
    documentType?: {
        id: string;
        name: string;
    } | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    documentTags?: {
        id: string;
        name: string;
    }[] | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    storageObjectId?: string | undefined;
    embeddingStatus?: "PENDING" | "PROCESSING" | "FAILED" | "SUCCESS" | undefined;
    documentKey?: string | undefined;
    documentFormat?: DocumentFormatTypeEnum | undefined;
    documentFormatTypeId?: string | undefined;
}>;
export type AddDocumentFormValues = ZodReturnType<typeof addDocumentValidationSchema>;
//# sourceMappingURL=AddDocumentValidator.d.ts.map