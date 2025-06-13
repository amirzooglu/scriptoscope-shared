"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserOrganizationValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema using Zod
exports.addUserOrganizationValidationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "User ID is required"),
    firstName: zod_1.z.string().min(1, "First name is required"),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    organizationName: zod_1.z.string().min(1, "Organization name is required"),
});
