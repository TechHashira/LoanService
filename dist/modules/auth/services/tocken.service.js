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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jsonwebtoken_1 = require("jsonwebtoken");
const constants_1 = require("../../../common/constants");
const tokenExpired_exception_1 = require("../exceptions/tokenExpired.exception");
const tokenMalformed_exception_1 = require("../exceptions/tokenMalformed.exception");
let TokenService = class TokenService {
    constructor(_jwtService, _cacheManager, _configService) {
        this._jwtService = _jwtService;
        this._cacheManager = _cacheManager;
        this._configService = _configService;
    }
    async generateAccesToken(userId, role) {
        return await this._jwtService.signAsync({ sub: userId, role }, { expiresIn: this._configService.get('JWT_EXP') });
    }
    async generateRefreshToken(userId, role) {
        const payload = {
            is_revoked: false,
            sub: userId,
            role,
        };
        const token = await this._jwtService.signAsync(payload, {
            secret: this._configService.get('JWT_SECRET_REFRESH_TOKEN'),
        });
        await this.addRefreshTokenToCacheStore(token, userId);
        return token;
    }
    async addRefreshTokenToCacheStore(token, userId) {
        return await this._cacheManager.set(token, userId);
    }
    async resolveRefreshToken(encoded) {
        const payload = await this.decodeRefreshToken(encoded);
        const { sub: userIdFromClient, role } = payload;
        const userIdFromStoredToken = await this.getStoredToken(encoded);
        if (!userIdFromStoredToken) {
            throw new common_1.UnprocessableEntityException('Refresh token not found');
        }
        if (userIdFromClient !== userIdFromStoredToken) {
            throw new tokenMalformed_exception_1.TokenMalformedException();
        }
        return { userIdFromClient, role };
    }
    async decodeRefreshToken(token) {
        try {
            return await this._jwtService.verifyAsync(token, {
                secret: this._configService.get('JWT_SECRET_REFRESH_TOKEN'),
            });
        }
        catch (e) {
            if (e instanceof jsonwebtoken_1.TokenExpiredError) {
                throw new tokenExpired_exception_1.TokenExpiredException();
            }
            else {
                throw new tokenMalformed_exception_1.TokenMalformedException();
            }
        }
    }
    async createAccessTokenFromRefreshToken(refresh) {
        const { userIdFromClient, role } = await this.resolveRefreshToken(refresh);
        if (!userIdFromClient) {
            throw new tokenMalformed_exception_1.TokenMalformedException();
        }
        const token = await this.generateAccesToken(userIdFromClient, role);
        return token;
    }
    async getStoredToken(token) {
        return await this._cacheManager.get(token);
    }
    async refresh(refreshTokenDto) {
        const { refresh_token } = refreshTokenDto;
        const newAccessToken = await this.createAccessTokenFromRefreshToken(refresh_token);
        return { access_token: newAccessToken };
    }
};
TokenService = __decorate([
    common_2.Injectable(),
    __param(1, common_2.Inject(common_2.CACHE_MANAGER)),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object, config_1.ConfigService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=tocken.service.js.map