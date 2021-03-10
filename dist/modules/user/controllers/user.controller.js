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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const queryOptions_dto_1 = require("../../../common/dtos/queryOptions.dto");
const roles_decorator_1 = require("../../../common/rolesDecorator/roles.decorator");
const roles_guard_1 = require("../../../guards/roles.guard");
const jwtAccessToken_guard_1 = require("../../auth/guards/jwtAccessToken.guard");
const user_service_1 = require("../services/user.service");
let UserController = class UserController {
    constructor(_userService) {
        this._userService = _userService;
    }
    async getUser(id) {
        return this._userService.findUserById(id);
    }
    async getAllUsers(queryParamsDto) {
        return this._userService.findAllUsers(queryParamsDto);
    }
};
__decorate([
    common_1.Get('users/:id'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Get('users'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryOptions_dto_1.QueryParamsDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
UserController = __decorate([
    common_1.Controller('loanservice/v1/admin'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map