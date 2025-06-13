import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addTaskValidationSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    requestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodString;
    requestedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    documentRequest: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    workFlowId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    workflow: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>>;
    completionTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completionType: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>>;
    documentTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    documentType: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>>;
    documentTitle: z.ZodOptional<z.ZodString>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    statusId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>>;
    taskAssignees: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    includeDocument: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    documentKey: z.ZodOptional<z.ZodString>;
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
    fileUrl: z.ZodOptional<z.ZodString>;
    storagePath: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    description: string;
    documentRequest: boolean;
    includeDocument: boolean;
    id?: string | undefined;
    status?: {
        id: string;
        name: string;
    } | null | undefined;
    statusId?: string | null | undefined;
    notes?: string | null | undefined;
    requestId?: string | null | undefined;
    documentTitle?: string | undefined;
    documentTypeId?: string | null | undefined;
    documentType?: {
        id: string;
        name: string;
    } | null | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    documentKey?: string | undefined;
    dueDate?: Date | null | undefined;
    requestedBy?: string | null | undefined;
    workFlowId?: string | null | undefined;
    workflow?: {
        id: string;
        name: string;
    } | null | undefined;
    completionTypeId?: string | null | undefined;
    completionType?: {
        id: string;
        name: string;
    } | null | undefined;
    taskAssignees?: {
        id: string;
        name: string;
    }[] | undefined;
}, {
    description: string;
    id?: string | undefined;
    status?: {
        id: string;
        name: string;
    } | null | undefined;
    statusId?: string | null | undefined;
    notes?: string | null | undefined;
    requestId?: string | null | undefined;
    documentTitle?: string | undefined;
    documentTypeId?: string | null | undefined;
    documentType?: {
        id: string;
        name: string;
    } | null | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    documentKey?: string | undefined;
    dueDate?: Date | null | undefined;
    requestedBy?: string | null | undefined;
    documentRequest?: boolean | undefined;
    workFlowId?: string | null | undefined;
    workflow?: {
        id: string;
        name: string;
    } | null | undefined;
    completionTypeId?: string | null | undefined;
    completionType?: {
        id: string;
        name: string;
    } | null | undefined;
    taskAssignees?: {
        id: string;
        name: string;
    }[] | undefined;
    includeDocument?: boolean | undefined;
}>, {
    description: string;
    documentRequest: boolean;
    includeDocument: boolean;
    id?: string | undefined;
    status?: {
        id: string;
        name: string;
    } | null | undefined;
    statusId?: string | null | undefined;
    notes?: string | null | undefined;
    requestId?: string | null | undefined;
    documentTitle?: string | undefined;
    documentTypeId?: string | null | undefined;
    documentType?: {
        id: string;
        name: string;
    } | null | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    documentKey?: string | undefined;
    dueDate?: Date | null | undefined;
    requestedBy?: string | null | undefined;
    workFlowId?: string | null | undefined;
    workflow?: {
        id: string;
        name: string;
    } | null | undefined;
    completionTypeId?: string | null | undefined;
    completionType?: {
        id: string;
        name: string;
    } | null | undefined;
    taskAssignees?: {
        id: string;
        name: string;
    }[] | undefined;
}, {
    description: string;
    id?: string | undefined;
    status?: {
        id: string;
        name: string;
    } | null | undefined;
    statusId?: string | null | undefined;
    notes?: string | null | undefined;
    requestId?: string | null | undefined;
    documentTitle?: string | undefined;
    documentTypeId?: string | null | undefined;
    documentType?: {
        id: string;
        name: string;
    } | null | undefined;
    documentUploadTypeId?: string | undefined;
    documentUploadType?: {
        id: string;
        name: string;
    } | undefined;
    fileUrl?: string | undefined;
    storagePath?: string | undefined;
    documentKey?: string | undefined;
    dueDate?: Date | null | undefined;
    requestedBy?: string | null | undefined;
    documentRequest?: boolean | undefined;
    workFlowId?: string | null | undefined;
    workflow?: {
        id: string;
        name: string;
    } | null | undefined;
    completionTypeId?: string | null | undefined;
    completionType?: {
        id: string;
        name: string;
    } | null | undefined;
    taskAssignees?: {
        id: string;
        name: string;
    }[] | undefined;
    includeDocument?: boolean | undefined;
}>;
export type AddTaskFormValues = ZodReturnType<typeof addTaskValidationSchema>;
//# sourceMappingURL=AddTaskValidator.d.ts.map