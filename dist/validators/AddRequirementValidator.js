"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequirementValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
// Define the validation schema for requirements
//z.string().uuid().optional()  dont use uuid() gives error
exports.addRequirementValidationSchema = zod_1.z
    .object({
    requestId: zod_1.z.string().nullable().optional(), // Optional UUID for request
    summary: zod_1.z.string().min(1, "Summary is required"), // Title must be a non-empty string
    requirementTypeId: zod_1.z.string().nullable().optional(), // Optional UUID for requirement type
    requirementType: zod_1.z
        .object({
        id: zod_1.z.string().uuid(),
        name: zod_1.z.string(),
    })
        .nullable()
        .optional(), // Optional nested object for requirement type
    notes: zod_1.z.string().nullable().optional(), // Optional notes field
    hasRequirementDate: zod_1.z.boolean().optional(), // Optional boolean field
    dueDate: zod_1.z.date().nullable().optional(), // Optional date field
    hasLinkToRequestDate: zod_1.z.boolean().optional(),
    due_day_count: zod_1.z.number().nullable().optional(),
    dueReferenceTimingId: zod_1.z.string().nullable().optional(),
    dueReferenceTiming: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    dueRelatedDateTypeId: zod_1.z.string().nullable().optional(),
    dueRelatedDateType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    hasLinkToDocumentDueDate: zod_1.z.boolean().optional(),
    documentId: zod_1.z.string().nullable().optional(),
    document: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    sendAlert: zod_1.z.boolean().optional().default(false),
    alertTypeId: zod_1.z.string().nullable().optional(),
    alertType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    alertDayCount: zod_1.z.number().nullable().optional(),
    referenceTimingId: zod_1.z.string().nullable().optional(),
    referenceTiming: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    relatedDateTypeId: zod_1.z.string().nullable().optional(),
    relatedDateType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    repetitionTypeId: zod_1.z.string().nullable().optional(),
    repetitionType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    numberOfAlertOccurrences: zod_1.z.number().nullable().optional(),
    alertRecipients: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(),
    includeMessage: zod_1.z.boolean().optional().default(false),
    customMessage: zod_1.z.string().nullable().optional(),
})
    .superRefine((data, ctx) => {
    if (data.hasLinkToRequestDate) {
        console.log("data", data);
        if (data.due_day_count === null || data.due_day_count === undefined) {
            ctx.addIssue({
                path: ["due_day_count"],
                message: 'Due day count is required when "Link to Request Date" is true.',
                code: "custom",
            });
        }
        if (!data.dueReferenceTiming?.id) {
            ctx.addIssue({
                path: ["dueReferenceTiming"],
                message: 'Due reference timing is required when "Link to Request Date" is true.',
                code: "custom",
            });
        }
        if (!data.dueRelatedDateType?.id) {
            ctx.addIssue({
                path: ["dueRelatedDateType"],
                message: 'Due related date type is required when "Link to Request Date" is true.',
                code: "custom",
            });
        }
        if (data.hasLinkToDocumentDueDate && !data.document?.id) {
            ctx.addIssue({
                path: ["document"],
                message: 'Document is required when "Link to Request Date" is true.',
                code: "custom",
            });
        }
    }
    if (data.sendAlert) {
        console.log("data", data);
        if (data.alertDayCount === null || data.alertDayCount === undefined) {
            ctx.addIssue({
                path: ["alertDayCount"],
                message: 'Alert day count is required when "Send Alert" is true.',
                code: "custom",
            });
        }
        if (!data.referenceTiming?.id) {
            ctx.addIssue({
                path: ["alertReferenceTiming"],
                message: 'Alert reference timing is required when "Send Alert" is true.',
                code: "custom",
            });
        }
        if (!data.relatedDateType?.id) {
            ctx.addIssue({
                path: ["relatedDateType"],
                message: 'Related date type is required when "Send Alert" is true.',
                code: "custom",
            });
        }
        if (!data.repetitionType?.id) {
            ctx.addIssue({
                path: ["repetitionType"],
                message: 'Repetition type is required when "Send Alert" is true.',
                code: "custom",
            });
        }
        if (data.repetitionType?.name !== "No Repetition" &&
            (data.numberOfAlertOccurrences === null ||
                data.numberOfAlertOccurrences === undefined)) {
            ctx.addIssue({
                path: ["numberOfAlertOccurrences"],
                message: 'Number of alert occurrences is required when "Send Alert" is true.',
                code: "custom",
            });
        }
        if (data.includeMessage && !data.customMessage) {
            ctx.addIssue({
                path: ["customMessage"],
                message: 'Custom message is required when "Include Message" is true.',
                code: "custom",
            });
        }
    }
});
