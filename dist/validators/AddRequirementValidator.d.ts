import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addRequirementValidationSchema: z.ZodEffects<z.ZodObject<{
    requestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodString;
    requirementTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requirementType: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hasRequirementDate: z.ZodOptional<z.ZodBoolean>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    hasLinkToRequestDate: z.ZodOptional<z.ZodBoolean>;
    due_day_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dueReferenceTimingId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dueReferenceTiming: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    dueRelatedDateTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dueRelatedDateType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    hasLinkToDocumentDueDate: z.ZodOptional<z.ZodBoolean>;
    documentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    document: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    sendAlert: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    alertTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    alertType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    alertDayCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    referenceTimingId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    referenceTiming: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    relatedDateTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    relatedDateType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    repetitionTypeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    repetitionType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    numberOfAlertOccurrences: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    alertRecipients: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    includeMessage: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    customMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    sendAlert: boolean;
    includeMessage: boolean;
    summary: string;
    notes?: string | null | undefined;
    requestId?: string | null | undefined;
    alertTypeId?: string | null | undefined;
    alertType?: {
        id: string;
        name: string;
    } | undefined;
    alertDayCount?: number | null | undefined;
    referenceTimingId?: string | null | undefined;
    referenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    relatedDateTypeId?: string | null | undefined;
    relatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    repetitionTypeId?: string | null | undefined;
    repetitionType?: {
        id: string;
        name: string;
    } | undefined;
    numberOfAlertOccurrences?: number | null | undefined;
    alertRecipients?: {
        id: string;
        name: string;
    }[] | undefined;
    customMessage?: string | null | undefined;
    requirementTypeId?: string | null | undefined;
    requirementType?: {
        id: string;
        name: string;
    } | null | undefined;
    hasRequirementDate?: boolean | undefined;
    dueDate?: Date | null | undefined;
    hasLinkToRequestDate?: boolean | undefined;
    due_day_count?: number | null | undefined;
    dueReferenceTimingId?: string | null | undefined;
    dueReferenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    dueRelatedDateTypeId?: string | null | undefined;
    dueRelatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    hasLinkToDocumentDueDate?: boolean | undefined;
    documentId?: string | null | undefined;
    document?: {
        id: string;
        name: string;
    } | undefined;
}, {
    summary: string;
    notes?: string | null | undefined;
    sendAlert?: boolean | undefined;
    requestId?: string | null | undefined;
    alertTypeId?: string | null | undefined;
    alertType?: {
        id: string;
        name: string;
    } | undefined;
    alertDayCount?: number | null | undefined;
    referenceTimingId?: string | null | undefined;
    referenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    relatedDateTypeId?: string | null | undefined;
    relatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    repetitionTypeId?: string | null | undefined;
    repetitionType?: {
        id: string;
        name: string;
    } | undefined;
    numberOfAlertOccurrences?: number | null | undefined;
    alertRecipients?: {
        id: string;
        name: string;
    }[] | undefined;
    includeMessage?: boolean | undefined;
    customMessage?: string | null | undefined;
    requirementTypeId?: string | null | undefined;
    requirementType?: {
        id: string;
        name: string;
    } | null | undefined;
    hasRequirementDate?: boolean | undefined;
    dueDate?: Date | null | undefined;
    hasLinkToRequestDate?: boolean | undefined;
    due_day_count?: number | null | undefined;
    dueReferenceTimingId?: string | null | undefined;
    dueReferenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    dueRelatedDateTypeId?: string | null | undefined;
    dueRelatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    hasLinkToDocumentDueDate?: boolean | undefined;
    documentId?: string | null | undefined;
    document?: {
        id: string;
        name: string;
    } | undefined;
}>, {
    sendAlert: boolean;
    includeMessage: boolean;
    summary: string;
    notes?: string | null | undefined;
    requestId?: string | null | undefined;
    alertTypeId?: string | null | undefined;
    alertType?: {
        id: string;
        name: string;
    } | undefined;
    alertDayCount?: number | null | undefined;
    referenceTimingId?: string | null | undefined;
    referenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    relatedDateTypeId?: string | null | undefined;
    relatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    repetitionTypeId?: string | null | undefined;
    repetitionType?: {
        id: string;
        name: string;
    } | undefined;
    numberOfAlertOccurrences?: number | null | undefined;
    alertRecipients?: {
        id: string;
        name: string;
    }[] | undefined;
    customMessage?: string | null | undefined;
    requirementTypeId?: string | null | undefined;
    requirementType?: {
        id: string;
        name: string;
    } | null | undefined;
    hasRequirementDate?: boolean | undefined;
    dueDate?: Date | null | undefined;
    hasLinkToRequestDate?: boolean | undefined;
    due_day_count?: number | null | undefined;
    dueReferenceTimingId?: string | null | undefined;
    dueReferenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    dueRelatedDateTypeId?: string | null | undefined;
    dueRelatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    hasLinkToDocumentDueDate?: boolean | undefined;
    documentId?: string | null | undefined;
    document?: {
        id: string;
        name: string;
    } | undefined;
}, {
    summary: string;
    notes?: string | null | undefined;
    sendAlert?: boolean | undefined;
    requestId?: string | null | undefined;
    alertTypeId?: string | null | undefined;
    alertType?: {
        id: string;
        name: string;
    } | undefined;
    alertDayCount?: number | null | undefined;
    referenceTimingId?: string | null | undefined;
    referenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    relatedDateTypeId?: string | null | undefined;
    relatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    repetitionTypeId?: string | null | undefined;
    repetitionType?: {
        id: string;
        name: string;
    } | undefined;
    numberOfAlertOccurrences?: number | null | undefined;
    alertRecipients?: {
        id: string;
        name: string;
    }[] | undefined;
    includeMessage?: boolean | undefined;
    customMessage?: string | null | undefined;
    requirementTypeId?: string | null | undefined;
    requirementType?: {
        id: string;
        name: string;
    } | null | undefined;
    hasRequirementDate?: boolean | undefined;
    dueDate?: Date | null | undefined;
    hasLinkToRequestDate?: boolean | undefined;
    due_day_count?: number | null | undefined;
    dueReferenceTimingId?: string | null | undefined;
    dueReferenceTiming?: {
        id: string;
        name: string;
    } | undefined;
    dueRelatedDateTypeId?: string | null | undefined;
    dueRelatedDateType?: {
        id: string;
        name: string;
    } | undefined;
    hasLinkToDocumentDueDate?: boolean | undefined;
    documentId?: string | null | undefined;
    document?: {
        id: string;
        name: string;
    } | undefined;
}>;
export type AddRequirementFormValues = ZodReturnType<typeof addRequirementValidationSchema>;
//# sourceMappingURL=AddRequirementValidator.d.ts.map