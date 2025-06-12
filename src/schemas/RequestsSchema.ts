import { z } from 'zod';

export const RequestsSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid().nullable(),
  applicationId: z.string().uuid().nullable(),
  statusId: z.string().uuid().nullable(),
  requestTypeId: z.string().uuid().nullable(),
  requestRoleId: z.string().uuid().nullable(),
  requestOwnerId: z.string().uuid().nullable(),
  requestorId: z.string().uuid().nullable(),
  requestDate: z.coerce.date().nullable(),
  requestNumber: z.string().nullable(),
  shortDescription: z.string().nullable(),
  notes: z.string().nullable(),
  effectiveDate: z.coerce.date().nullable(),
  expirationDate: z.coerce.date().nullable(),
  autoRenewal: z.boolean().nullable(),
  includeAmount: z.boolean().nullable(),
  requestValue: z.number().nullable(),
  amountReceived: z.number().nullable(),
  sendAlert: z.boolean().nullable(),
  internalEntity: z.string().nullable(),
  createdAt: z.coerce.date().nullable(),
  createdBy: z.string().uuid().nullable(),
  updatedAt: z.coerce.date().nullable(),
  updatedBy: z.string().uuid().nullable(),
});

export type Requests = z.infer<typeof RequestsSchema>;