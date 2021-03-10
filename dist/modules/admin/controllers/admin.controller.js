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
const createLoan_dto_1 = require("../../loan/dtos/createLoan.dto");
const loan_service_1 = require("../../loan/services/loan.service");
const createSaving_dto_1 = require("../../saving/dtos/createSaving.dto");
const userSaving_service_1 = require("../../saving/services/userSaving.service");
const user_service_1 = require("../../user/services/user.service");
const createWorksheet_dto_1 = require("../../worksheet/dtos/createWorksheet.dto");
const createWorksheetUser_dto_1 = require("../../worksheet/dtos/createWorksheetUser.dto");
const worksheet_service_1 = require("../../worksheet/services/worksheet.service");
const loanResponse_dto_1 = require("../dtos/loanResponse.dto");
let AdminController = class AdminController {
    constructor(_userService, _userSavingService, _loanService, _worksheetService) {
        this._userService = _userService;
        this._userSavingService = _userSavingService;
        this._loanService = _loanService;
        this._worksheetService = _worksheetService;
    }
    async createUser(userRegisterDto) {
        return this._userService.createUser(userRegisterDto);
    }
    async createSavingUser(createSavingDto) {
        return this._userSavingService.createSaving(createSavingDto);
    }
    async createLoan(createLoanDtom) {
        return this._loanService.createLoan(createLoanDtom);
    }
    async createWorksheet(createWorksheetDto) {
        return this._worksheetService.createWorksheet(createWorksheetDto);
    }
    async createWorksheetUser(createWorksheetUserDto) {
        return this._worksheetService.createWorkSheetUser(createWorksheetUserDto);
    }
};
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Post('users'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: registerUser_dto_1.UserRegisterDto,
        description: 'Successfully Registered',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerUser_dto_1.UserRegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createUser", null);
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Post('savings'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: createSaving_dto_1.CreateSavingDto,
        description: 'Successfully Registered',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createSaving_dto_1.CreateSavingDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createSavingUser", null);
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Post('loans'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: loanResponse_dto_1.LoanResponseDto,
        description: 'Successfully Registered',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createLoan_dto_1.CreateLoanDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createLoan", null);
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Post('worksheets/tables'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: createWorksheet_dto_1.CreateWorksheetDto,
        description: 'Successfully Registered',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWorksheet_dto_1.CreateWorksheetDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createWorksheet", null);
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Post('worksheets/users'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiOkResponse({
        status: common_1.HttpStatus.OK,
        type: createWorksheet_dto_1.CreateWorksheetDto,
        description: 'Successfully Registered',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createWorksheetUser_dto_1.CreateWorksheetUserDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createWorksheetUser", null);
AdminController = __decorate([
    common_1.Controller('loanservice/v1/admin'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        userSaving_service_1.UserSavingService,
        loan_service_1.LoanService,
        worksheet_service_1.WorksheetService])
], AdminController);
exports.AdminController = AdminController;
//# sourceMappingURL=admin.controller.js.map