"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedFailedException = void 0;
const common_1 = require("@nestjs/common");
class CreatedFailedException extends common_1.BadRequestException {
    constructor(error) {
        super('error.created_failed', error);
    }
}
exports.CreatedFailedException = CreatedFailedException;
//# sourceMappingURL=createdFailed.exception.js.map