"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRequestTemplateValidator = void 0;
const zod_1 = require("zod");
exports.GetRequestTemplateValidator = zod_1.z.object({
    id: zod_1.z.string(),
    applicationId: zod_1.z.string().optional(),
    organizationId: zod_1.z.string().optional(),
    requestTypeId: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    fileUrl: zod_1.z.string().optional(),
    documentTitle: zod_1.z.string().optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
