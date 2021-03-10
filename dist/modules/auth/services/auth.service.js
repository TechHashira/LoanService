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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../../user/dtos/user.dto");
const user_service_1 = require("../../user/services/user.service");
const tocken_service_1 = require("./tocken.service");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const admin_service_1 = require("../../admin/services/admin.service");
const adminRegister_dto_1 = require("../../admin/dtos/adminRegister.dto");
let AuthService = class AuthService {
    constructor(_tokenService, _userService, _adminService, _configService) {
        this._tokenService = _tokenService;
        this._userService = _userService;
        this._adminService = _adminService;
        this._configService = _configService;
    }
    async validateUser(email, password) {
        const user = await this._adminService.findByEmailAuth(email);
        const { password: userPassword } = user;
        const isMath = await bcrypt.compare(password, userPassword);
        if ((user && isMath) ||
            userPassword === this._configService.get('ADMIN_PASSWORD')) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(user) {
        const { id, role } = user;
        return {
            access_token: await this._tokenService.generateAccesToken(id, role),
            refresh_token: await this._tokenService.generateRefreshToken(id, role),
        };
    }
    async hashPassword(userRegisterDto) {
        const _a = Object.assign({}, userRegisterDto), { password: passwordToHash } = _a, newUserReg = __rest(_a, ["password"]);
        const password = await bcrypt.hash(passwordToHash, Number(this._configService.get('BCRYPT_ROUNDS')));
        const user = Object.assign(Object.assign({}, newUserReg), { password });
        return user;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [tocken_service_1.TokenService,
        user_service_1.UserService,
        admin_service_1.AdminService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map