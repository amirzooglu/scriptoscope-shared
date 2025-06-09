"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlaybookValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
exports.addPlaybookValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1, "Playbook name is required"),
    roleId: zod_1.z.string().optional(), // Optional UUID for request type
    role: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional(),
    description: zod_1.z.string().optional().default(""),
    recommendationType: zod_1.z.string().optional(),
    selectedTopics: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional()
        .default([]),
});
