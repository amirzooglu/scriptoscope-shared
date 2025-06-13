"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageValidator = void 0;
const zod_1 = require("zod");
exports.SendMessageValidator = zod_1.z.object({
    documentId: zod_1.z.string(),
    message: zod_1.z.string()
});
