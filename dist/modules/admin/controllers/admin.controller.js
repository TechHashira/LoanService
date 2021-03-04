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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../../common/constants");
const roles_decorator_1 = require("../../../common/rolesDecorator/roles.decorator");
const roles_guard_1 = require("../../../guards/roles.guard");
const registerUser_dto_1 = require("../dtos/registerUser.dto");
const jwtAccessToken_guard_1 = require("../../auth/guards/jwtAccessToken.guard");
const user_dto_1 = require("../../user/dtos/user.dto");
const user_service_1 = require("../../user/services/user.service");
let AdminController = class AdminController {
    constructor(_userService) {
        this._userService = _userService;
    }
    async createUser(userRegisterDto) {
        return this._userService.createUser(userRegisterDto);
    }
};
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Post('register'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: user_dto_1.UserDto,
        description: 'Successfully Registered',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerUser_dto_1.UserRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createUser", null);
AdminController = __decorate([
    common_1.Controller('admin'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map