"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accessTokenDto_dto_1 = require("../dtos/accessTokenDto.dto");
const loginResponse_dto_1 = require("../dtos/loginResponse.dto");
const refreshToken_dto_1 = require("../dtos/refreshToken.dto");
const local_auth_guard_1 = require("../guards/local-auth.guard");
const auth_service_1 = require("../services/auth.service");
const tocken_service_1 = require("../services/tocken.service");
let AuthController = class AuthController {
    constructor(_authService, _tokenService) {
        this._authService = _authService;
        this._tokenService = _tokenService;
    }
    async login({ user }) {
        return await this._authService.login(user);
    }
    async getUser(body) {
        return this._tokenService.refresh(body);
    }
};
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: loginResponse_dto_1.LoginResponseDto,
        description: 'Logged succesfully!',
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('refresh'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: accessTokenDto_dto_1.AccessTokenDto,
        description: 'Access_token created',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refreshToken_dto_1.RefreshTokenRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUser", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        tocken_service_1.TokenService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map