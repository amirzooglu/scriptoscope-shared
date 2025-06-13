"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRequestValidationSchema = exports.RelatedDateType = void 0;
const zod_1 = require("zod");
// Define the RelatedDateType enum
exports.RelatedDateType = zod_1.z.enum(['Expiration', 'Effective']);
// Define the validation schema using Zod
exports.editRequestValidationSchema = zod_1.z
    .object({
    id: zod_1.z.string(), // UUID for request ID
    requestNumber: zod_1.z.string().optional(), // Optional request number
    applicationId: zod_1.z.string().optional(), // Optional UUID for contract
    requestPartners: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .nonempty({ message: 'At least one request party is required.' }), // Make it required
    requestParties: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .nonempty({ message: 'At least one request party is required.' }), // Make it required
    requestTypeId: zod_1.z.string().optional(), // Optional UUID for request type
    requestType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    requestRoleId: zod_1.z.string().optional(), // Optional UUID for request type
    requestRole: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    requestOwnerId: zod_1.z.string().optional(), // Optional UUID for request type
    requestOwner: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    organizationId: zod_1.z.string().optional(), // Optional UUID for request type
    organization: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    shortDescription: zod_1.z.string().nullable().optional(), // Optional short description
    requestEntities: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Adjusted to an array of objects
    departments: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Adjusted to an array of objects
    businessGroup: zod_1.z.string().nullable().optional(), // Optional short description
    tags: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Adjusted to an array of objects
    requestGroups: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .nonempty({ message: 'At least one request group is required.' }), // Make it required
    notes: zod_1.z.string().nullable().optional(), // Optional short description
    effectiveDate: zod_1.z.date().nullable().optional(), // Optional effective date
    expirationDate: zod_1.z.date().nullable().optional(), // Optional expiration date
    autoRenewal: zod_1.z.boolean().optional().default(false), // Optional boolean for auto-renewal with a default value of false
    includeAmount: zod_1.z.boolean().optional().default(false), // Optional boolean for auto-renewal with a default value of false
    requestValue: zod_1.z.number().nullable().optional(),
    numberOfRenewals: zod_1.z.number().nullable().optional().default(1),
    durationUnitId: zod_1.z.string().optional(), // Optional UUID for request type
    durationUnit: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    renewalTypeId: zod_1.z.string().optional(), // Optional UUID for request type
    renewalType: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    endsAfter: zod_1.z.number().nullable().optional().default(1),
    sendAlert: zod_1.z.boolean().optional().default(false),
    alertId: zod_1.z.string().nullable().optional(),
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
        source: zod_1.z.string(),
        code: zod_1.z.string(),
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
    // lastUpdate: z.date().nullable().optional(),  // Optional last update date
})
    .superRefine((data, ctx) => {
    if (!data.applicationId) {
        ctx.addIssue({
            path: ['applicationId'],
            message: 'Application ID is required.',
            code: 'custom',
        });
    }
    if (!data.requestType?.id) {
        ctx.addIssue({
            path: ['requestType'],
            message: 'Request type is required.',
            code: 'custom',
        });
    }
    if (!data.requestRole?.id) {
        ctx.addIssue({
            path: ['requestRole'],
            message: 'Request role is required.',
            code: 'custom',
        });
    }
    if (data.includeAmount) {
        if (data.requestValue === null || data.requestValue === undefined) {
            ctx.addIssue({
                path: ['requestValue'],
                message: 'Request value is required when "Include Amount" is true.',
                code: 'custom',
            });
        }
    }
    if (data.autoRenewal) {
        if (data.numberOfRenewals === null || data.numberOfRenewals === undefined) {
            ctx.addIssue({
                path: ['numberOfRenewals'],
                message: 'Number of renewals is required when "Auto Renewal" is true.',
                code: 'custom',
            });
        }
        if (!data.durationUnit?.id) {
            ctx.addIssue({
                path: ['durationUnit'],
                message: 'Duration unit is required when "Auto Renewal" is true.',
                code: 'custom',
            });
        }
        if (!data.renewalType?.id) {
            ctx.addIssue({
                path: ['renewalType'],
                message: 'Renewal type is required when "Auto Renewal" is true.',
                code: 'custom',
            });
        }
        if ((data.endsAfter === null || data.endsAfter === undefined) &&
            data.renewalType?.name === 'Ends After') {
            ctx.addIssue({
                path: ['endsAfter'],
                message: 'Ends after is required when "Auto Renewal" is true.',
                code: 'custom',
            });
        }
    }
    if (data.sendAlert) {
        console.log('data', data);
        if (data.alertDayCount === null || data.alertDayCount === undefined) {
            ctx.addIssue({
                path: ['alertDayCount'],
                message: 'Alert day count is required when "Send Alert" is true.',
                code: 'custom',
            });
        }
        if (!data.referenceTiming?.id) {
            ctx.addIssue({
                path: ['alertReferenceTiming'],
                message: 'Alert reference timing is required when "Send Alert" is true.',
                code: 'custom',
            });
        }
        if (!data.relatedDateType?.id) {
            ctx.addIssue({
                path: ['relatedDateType'],
                message: 'Related date type is required when "Send Alert" is true.',
                code: 'custom',
            });
        }
        if (!data.repetitionType?.id) {
            ctx.addIssue({
                path: ['repetitionType'],
                message: 'Repetition type is required when "Send Alert" is true.',
                code: 'custom',
            });
        }
        if (data.repetitionType?.name !== 'No Repetition' &&
            (data.numberOfAlertOccurrences === null || data.numberOfAlertOccurrences === undefined)) {
            ctx.addIssue({
                path: ['numberOfAlertOccurrences'],
                message: 'Number of alert occurrences is required when "Send Alert" is true.',
                code: 'custom',
            });
        }
        if (data.alertRecipients?.length === 0) {
            ctx.addIssue({
                path: ['alertRecipients'],
                message: 'At least one alert recipient is required when "Send Alert" is true.',
                code: 'custom',
            });
        }
        if (data.includeMessage && !data.customMessage) {
            ctx.addIssue({
                path: ['customMessage'],
                message: 'Custom message is required when "Include Message" is true.',
                code: 'custom',
            });
        }
        // Expiration Date Validation based on Enum
        if (data.relatedDateType?.code === exports.RelatedDateType.Values.Expiration &&
            !data.expirationDate) {
            ctx.addIssue({
                path: ['expirationDate'],
                message: 'Expiration date is required when "Related Date Type" is "Expiration".',
                code: 'custom',
            });
        }
        // Effective Date Validation based on Enum
        if (data.relatedDateType?.code === exports.RelatedDateType.Values.Effective && !data.effectiveDate) {
            ctx.addIssue({
                path: ['effectiveDate'],
                message: 'Expiration date is required when "Related Date Type" is "Expiration".',
                code: 'custom',
            });
        }
    }
});
