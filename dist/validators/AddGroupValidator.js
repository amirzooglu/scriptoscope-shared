"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGroupValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
exports.addGroupValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    groupName: zod_1.z.string().min(1, "Group name is required"),
    groupDescription: zod_1.z.string().optional(),
    permissions: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Adjusted to an array of objects
    workflows: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
});
