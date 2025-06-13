"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserRoleValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
exports.addUserRoleValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userRoleName: zod_1.z.string().min(1, "UserRole name is required"),
    userRoleDescription: zod_1.z.string().optional(),
    permissions: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }))
        .optional(), // Adjusted to an array of objects
});
