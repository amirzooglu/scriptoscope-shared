import { z } from 'zod';
import { ZodReturnType } from "../utils/types";
export declare const RelatedDateType: z.ZodEnum<["Expiration", "Effective"]>;
export declare const editRequestValidationSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    requestNumber: z.ZodOptional<z.ZodString>;
    applicationId: z.ZodOptional<z.ZodString>;
    requestPartners: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "atleastone">;
    requestParties: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "atleastone">;
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
    requestRoleId: z.ZodOptional<z.ZodString>;
    requestRole: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    requestOwnerId: z.ZodOptional<z.ZodString>;
    requestOwner: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    organizationId: z.ZodOptional<z.ZodString>;
    organization: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    shortDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestEntities: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    departments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    businessGroup: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">>;
    requestGroups: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "atleastone">;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    effectiveDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    expirationDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    autoRenewal: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    includeAmount: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    requestValue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    numberOfRenewals: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    durationUnitId: z.ZodOptional<z.ZodString>;
    durationUnit: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    renewalTypeId: z.ZodOptional<z.ZodString>;
    renewalType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    endsAfter: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    sendAlert: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    alertId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
        source: z.ZodString;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code: string;
        name: string;
        source: string;
    }, {
        id: string;
        code: string;
        name: string;
        source: string;
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
    id: string;
    autoRenewal: boolean;
    includeAmount: boolean;
    sendAlert: boolean;
    requestPartners: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestParties: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestGroups: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    numberOfRenewals: number | null;
    endsAfter: number | null;
    includeMessage: boolean;
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    requestRoleId?: string | undefined;
    requestOwnerId?: string | undefined;
    requestNumber?: string | undefined;
    shortDescription?: string | null | undefined;
    notes?: string | null | undefined;
    effectiveDate?: Date | null | undefined;
    expirationDate?: Date | null | undefined;
    requestValue?: number | null | undefined;
    requestType?: {
        id: string;
        name: string;
    } | undefined;
    requestRole?: {
        id: string;
        name: string;
    } | undefined;
    requestOwner?: {
        id: string;
        name: string;
    } | undefined;
    requestEntities?: {
        id: string;
        name: string;
    }[] | undefined;
    departments?: {
        id: string;
        name: string;
    }[] | undefined;
    businessGroup?: string | null | undefined;
    tags?: {
        id: string;
        name: string;
    }[] | undefined;
    durationUnitId?: string | undefined;
    durationUnit?: {
        id: string;
        name: string;
    } | undefined;
    renewalTypeId?: string | undefined;
    renewalType?: {
        id: string;
        name: string;
    } | undefined;
    alertId?: string | null | undefined;
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
        code: string;
        name: string;
        source: string;
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
    organization?: {
        id: string;
        name: string;
    } | undefined;
}, {
    id: string;
    requestPartners: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestParties: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestGroups: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    requestRoleId?: string | undefined;
    requestOwnerId?: string | undefined;
    requestNumber?: string | undefined;
    shortDescription?: string | null | undefined;
    notes?: string | null | undefined;
    effectiveDate?: Date | null | undefined;
    expirationDate?: Date | null | undefined;
    autoRenewal?: boolean | undefined;
    includeAmount?: boolean | undefined;
    requestValue?: number | null | undefined;
    sendAlert?: boolean | undefined;
    requestType?: {
        id: string;
        name: string;
    } | undefined;
    requestRole?: {
        id: string;
        name: string;
    } | undefined;
    requestOwner?: {
        id: string;
        name: string;
    } | undefined;
    requestEntities?: {
        id: string;
        name: string;
    }[] | undefined;
    departments?: {
        id: string;
        name: string;
    }[] | undefined;
    businessGroup?: string | null | undefined;
    tags?: {
        id: string;
        name: string;
    }[] | undefined;
    numberOfRenewals?: number | null | undefined;
    durationUnitId?: string | undefined;
    durationUnit?: {
        id: string;
        name: string;
    } | undefined;
    renewalTypeId?: string | undefined;
    renewalType?: {
        id: string;
        name: string;
    } | undefined;
    endsAfter?: number | null | undefined;
    alertId?: string | null | undefined;
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
        code: string;
        name: string;
        source: string;
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
    organization?: {
        id: string;
        name: string;
    } | undefined;
}>, {
    id: string;
    autoRenewal: boolean;
    includeAmount: boolean;
    sendAlert: boolean;
    requestPartners: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestParties: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestGroups: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    numberOfRenewals: number | null;
    endsAfter: number | null;
    includeMessage: boolean;
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    requestRoleId?: string | undefined;
    requestOwnerId?: string | undefined;
    requestNumber?: string | undefined;
    shortDescription?: string | null | undefined;
    notes?: string | null | undefined;
    effectiveDate?: Date | null | undefined;
    expirationDate?: Date | null | undefined;
    requestValue?: number | null | undefined;
    requestType?: {
        id: string;
        name: string;
    } | undefined;
    requestRole?: {
        id: string;
        name: string;
    } | undefined;
    requestOwner?: {
        id: string;
        name: string;
    } | undefined;
    requestEntities?: {
        id: string;
        name: string;
    }[] | undefined;
    departments?: {
        id: string;
        name: string;
    }[] | undefined;
    businessGroup?: string | null | undefined;
    tags?: {
        id: string;
        name: string;
    }[] | undefined;
    durationUnitId?: string | undefined;
    durationUnit?: {
        id: string;
        name: string;
    } | undefined;
    renewalTypeId?: string | undefined;
    renewalType?: {
        id: string;
        name: string;
    } | undefined;
    alertId?: string | null | undefined;
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
        code: string;
        name: string;
        source: string;
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
    organization?: {
        id: string;
        name: string;
    } | undefined;
}, {
    id: string;
    requestPartners: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestParties: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    requestGroups: [{
        id: string;
        name: string;
    }, ...{
        id: string;
        name: string;
    }[]];
    organizationId?: string | undefined;
    applicationId?: string | undefined;
    requestTypeId?: string | undefined;
    requestRoleId?: string | undefined;
    requestOwnerId?: string | undefined;
    requestNumber?: string | undefined;
    shortDescription?: string | null | undefined;
    notes?: string | null | undefined;
    effectiveDate?: Date | null | undefined;
    expirationDate?: Date | null | undefined;
    autoRenewal?: boolean | undefined;
    includeAmount?: boolean | undefined;
    requestValue?: number | null | undefined;
    sendAlert?: boolean | undefined;
    requestType?: {
        id: string;
        name: string;
    } | undefined;
    requestRole?: {
        id: string;
        name: string;
    } | undefined;
    requestOwner?: {
        id: string;
        name: string;
    } | undefined;
    requestEntities?: {
        id: string;
        name: string;
    }[] | undefined;
    departments?: {
        id: string;
        name: string;
    }[] | undefined;
    businessGroup?: string | null | undefined;
    tags?: {
        id: string;
        name: string;
    }[] | undefined;
    numberOfRenewals?: number | null | undefined;
    durationUnitId?: string | undefined;
    durationUnit?: {
        id: string;
        name: string;
    } | undefined;
    renewalTypeId?: string | undefined;
    renewalType?: {
        id: string;
        name: string;
    } | undefined;
    endsAfter?: number | null | undefined;
    alertId?: string | null | undefined;
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
        code: string;
        name: string;
        source: string;
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
    organization?: {
        id: string;
        name: string;
    } | undefined;
}>;
export type EditRequestFormValues = ZodReturnType<typeof editRequestValidationSchema>;
//# sourceMappingURL=EditRequestValidator.d.ts.map