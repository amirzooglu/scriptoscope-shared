import {z} from "zod"

export const SendMessageValidator = z.object({
    documentId: z.string(),
    message: z.string()
})