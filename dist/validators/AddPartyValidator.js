"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPartyValidationSchema = void 0;
const zod_1 = require("zod");
// Define the validation schema for adding or updating a Party
exports.addPartyValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), // Party ID as an optional string (useful for updates)
    name: zod_1.z.string().min(1, "Party Name is required"), // Party name must be present and non-empty
    partyTypeId: zod_1.z.string().optional(), // Optional UUID for contract type
    partyType: zod_1.z.object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    }).optional(),
    websiteUrl: zod_1.z.string().url().optional(), // Website URL validation (optional)
    address: zod_1.z
        .object({
        addressId: zod_1.z.string().optional(), // Address ID (optional)
        addressName: zod_1.z.string().min(1, "Address name is required"), // Address name validation
        addressLine1: zod_1.z.string().optional(), // Optional address line 1
        addressLine2: zod_1.z.string().optional(), // Optional address line 2
        city: zod_1.z.string().optional(), // Optional city
        provinceRegion: zod_1.z.string().optional(), // Optional province/region
        postalCode: zod_1.z.string().optional(), // Optional postal code
        country: zod_1.z.string().min(1, "Country is required"), // Country validation
        isAddressPrimary: zod_1.z.boolean().optional(), // Optional boolean to indicate if the address is primary
    })
        .optional(), // Address validation (optional)
    contactInfo: zod_1.z
        .object({
        contactInfoId: zod_1.z.string().optional(), // Contact info ID (optional)
        firstName: zod_1.z.string().min(1, "First name is required"), // First name validation
        middleName: zod_1.z.string().optional(), // Optional middle name
        lastName: zod_1.z.string().min(1, "Last name is required"), // Last name validation
        organizationalTitle: zod_1.z.string().optional(), // Optional organizational title
        phone: zod_1.z.string().min(10, "Phone number is too short").optional(), // Phone number validation (optional)
        email: zod_1.z.string().email("Invalid email address").optional(), // Email validation (optional)
        isContactInfoPrimary: zod_1.z.boolean().optional(), // Optional boolean to indicate if the contact is primary
    })
        .optional(), // Contact info validation (optional)
}).superRefine((data, ctx) => {
    console.log("superRefine", data, ctx);
    if (!data.partyType?.id) {
        ctx.addIssue({
            path: ['partyType'],
            message: 'PArty type is required.',
            code: 'custom',
        });
    }
});
