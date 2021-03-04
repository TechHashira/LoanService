"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenExpiredException = void 0;
const common_1 = require("@nestjs/common");
class TokenExpiredException extends common_1.HttpException {
    constructor() {
        super('Unauthorized.token_expired', common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.TokenExpiredException = TokenExpiredException;
//# sourceMappingURL=tokenExpired.exception.js.map