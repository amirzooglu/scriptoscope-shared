"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestsSchema = void 0;
const zod_1 = require("zod");
exports.RequestsSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    organizationId: zod_1.z.string().uuid().nullable(),
    applicationId: zod_1.z.string().uuid().nullable(),
    statusId: zod_1.z.string().uuid().nullable(),
    requestTypeId: zod_1.z.string().uuid().nullable(),
    requestRoleId: zod_1.z.string().uuid().nullable(),
    requestOwnerId: zod_1.z.string().uuid().nullable(),
    requestorId: zod_1.z.string().uuid().nullable(),
    requestDate: zod_1.z.coerce.date().nullable(),
    requestNumber: zod_1.z.string().nullable(),
    shortDescription: zod_1.z.string().nullable(),
    notes: zod_1.z.string().nullable(),
    effectiveDate: zod_1.z.coerce.date().nullable(),
    expirationDate: zod_1.z.coerce.date().nullable(),
    autoRenewal: zod_1.z.boolean().nullable(),
    includeAmount: zod_1.z.boolean().nullable(),
    requestValue: zod_1.z.union([zod_1.z.coerce.number(), zod_1.z.null()]), // ✅ Accept "123.45" as number
    amountReceived: zod_1.z.union([zod_1.z.coerce.number(), zod_1.z.null()]), // ✅ Same fix here
    sendAlert: zod_1.z.boolean().nullable(),
    internalEntity: zod_1.z.string().nullable(),
    createdAt: zod_1.z.coerce.date().nullable(),
    createdBy: zod_1.z.string().uuid().nullable(),
    updatedAt: zod_1.z.coerce.date().nullable(),
    updatedBy: zod_1.z.string().uuid().nullable(),
});
