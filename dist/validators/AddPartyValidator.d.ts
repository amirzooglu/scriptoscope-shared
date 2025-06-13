import { z } from "zod";
import { ZodReturnType } from "../utils/types";
export declare const addPartyValidationSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    partyTypeId: z.ZodOptional<z.ZodString>;
    partyType: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    websiteUrl: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        addressId: z.ZodOptional<z.ZodString>;
        addressName: z.ZodString;
        addressLine1: z.ZodOptional<z.ZodString>;
        addressLine2: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        provinceRegion: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        country: z.ZodString;
        isAddressPrimary: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        addressName: string;
        country: string;
        addressId?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        provinceRegion?: string | undefined;
        postalCode?: string | undefined;
        isAddressPrimary?: boolean | undefined;
    }, {
        addressName: string;
        country: string;
        addressId?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        provinceRegion?: string | undefined;
        postalCode?: string | undefined;
        isAddressPrimary?: boolean | undefined;
    }>>;
    contactInfo: z.ZodOptional<z.ZodObject<{
        contactInfoId: z.ZodOptional<z.ZodString>;
        firstName: z.ZodString;
        middleName: z.ZodOptional<z.ZodString>;
        lastName: z.ZodString;
        organizationalTitle: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        isContactInfoPrimary: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
        contactInfoId?: string | undefined;
        middleName?: string | undefined;
        organizationalTitle?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        isContactInfoPrimary?: boolean | undefined;
    }, {
        firstName: string;
        lastName: string;
        contactInfoId?: string | undefined;
        middleName?: string | undefined;
        organizationalTitle?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        isContactInfoPrimary?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id?: string | undefined;
    partyTypeId?: string | undefined;
    partyType?: {
        id: string;
        name: string;
    } | undefined;
    websiteUrl?: string | undefined;
    address?: {
        addressName: string;
        country: string;
        addressId?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        provinceRegion?: string | undefined;
        postalCode?: string | undefined;
        isAddressPrimary?: boolean | undefined;
    } | undefined;
    contactInfo?: {
        firstName: string;
        lastName: string;
        contactInfoId?: string | undefined;
        middleName?: string | undefined;
        organizationalTitle?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        isContactInfoPrimary?: boolean | undefined;
    } | undefined;
}, {
    name: string;
    id?: string | undefined;
    partyTypeId?: string | undefined;
    partyType?: {
        id: string;
        name: string;
    } | undefined;
    websiteUrl?: string | undefined;
    address?: {
        addressName: string;
        country: string;
        addressId?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        provinceRegion?: string | undefined;
        postalCode?: string | undefined;
        isAddressPrimary?: boolean | undefined;
    } | undefined;
    contactInfo?: {
        firstName: string;
        lastName: string;
        contactInfoId?: string | undefined;
        middleName?: string | undefined;
        organizationalTitle?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        isContactInfoPrimary?: boolean | undefined;
    } | undefined;
}>, {
    name: string;
    id?: string | undefined;
    partyTypeId?: string | undefined;
    partyType?: {
        id: string;
        name: string;
    } | undefined;
    websiteUrl?: string | undefined;
    address?: {
        addressName: string;
        country: string;
        addressId?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        provinceRegion?: string | undefined;
        postalCode?: string | undefined;
        isAddressPrimary?: boolean | undefined;
    } | undefined;
    contactInfo?: {
        firstName: string;
        lastName: string;
        contactInfoId?: string | undefined;
        middleName?: string | undefined;
        organizationalTitle?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        isContactInfoPrimary?: boolean | undefined;
    } | undefined;
}, {
    name: string;
    id?: string | undefined;
    partyTypeId?: string | undefined;
    partyType?: {
        id: string;
        name: string;
    } | undefined;
    websiteUrl?: string | undefined;
    address?: {
        addressName: string;
        country: string;
        addressId?: string | undefined;
        addressLine1?: string | undefined;
        addressLine2?: string | undefined;
        city?: string | undefined;
        provinceRegion?: string | undefined;
        postalCode?: string | undefined;
        isAddressPrimary?: boolean | undefined;
    } | undefined;
    contactInfo?: {
        firstName: string;
        lastName: string;
        contactInfoId?: string | undefined;
        middleName?: string | undefined;
        organizationalTitle?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        isContactInfoPrimary?: boolean | undefined;
    } | undefined;
}>;
export type AddPartyFormValues = ZodReturnType<typeof addPartyValidationSchema>;
//# sourceMappingURL=AddPartyValidator.d.ts.map