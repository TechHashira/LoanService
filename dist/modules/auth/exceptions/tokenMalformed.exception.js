"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMalformedException = void 0;
const common_1 = require("@nestjs/common");
class TokenMalformedException extends common_1.HttpException {
    constructor() {
        super('Unauthorized.token_invalid', common_1.HttpStatus.UNAUTHORIZED);
    }
}
exports.TokenMalformedException = TokenMalformedException;
//# sourceMappingURL=tokenMalformed.exception.js.map