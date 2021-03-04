"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_module_1 = require("../user/user.module");
const auth_controller_1 = require("./controllers/auth.controller");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const auth_service_1 = require("./services/auth.service");
const tocken_service_1 = require("./services/tocken.service");
const local_strategy_1 = require("./strategies/local.strategy");
const redisStore = require("cache-manager-redis-store");
const common_2 = require("@nestjs/common");
const jwtAccessToken_strategy_1 = require("./strategies/jwtAccessToken.strategy");
const jwtRefreshToken_strategy_1 = require("./strategies/jwtRefreshToken.strategy");
const jwtAccessToken_guard_1 = require("./guards/jwtAccessToken.guard");
const admin_module_1 = require("../admin/admin.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => admin_module_1.AdminModule),
            common_1.forwardRef(() => user_module_1.UserModule),
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (_configService) => ({
                    secret: _configService.get('JWT_SECRET_ACCESS_TOKEN'),
                }),
                inject: [config_1.ConfigService],
            }),
            common_2.CacheModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (_configService) => ({
                    store: redisStore,
                    host: _configService.get('REDIS_HOST'),
                    port: _configService.get('REDIS_PORT'),
                    password: _configService.get('REDIS_PASSWORD'),
                    ttl: _configService.get('TTL'),
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService, jwtAccessToken_guard_1.JwtAccessTokenGuard],
        providers: [
            auth_service_1.AuthService,
            tocken_service_1.TokenService,
            local_strategy_1.LocalStrategy,
            jwtAccessToken_guard_1.JwtAccessTokenGuard,
            local_auth_guard_1.LocalAuthGuard,
            jwtAccessToken_strategy_1.JwtAccessTokenStrategy,
            jwtRefreshToken_strategy_1.JwtRefreshTokenStrategy,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map