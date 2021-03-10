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
exports.WorksheetsController = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../../common/constants");
const queryOptions_dto_1 = require("../../../common/dtos/queryOptions.dto");
const roles_decorator_1 = require("../../../common/rolesDecorator/roles.decorator");
const roles_guard_1 = require("../../../guards/roles.guard");
const jwtAccessToken_guard_1 = require("../../auth/guards/jwtAccessToken.guard");
const worksheet_service_1 = require("../services/worksheet.service");
let WorksheetsController = class WorksheetsController {
    constructor(_worksheetsService) {
        this._worksheetsService = _worksheetsService;
    }
    async getWorksheetById(id) {
        return this._worksheetsService.findWorkSheetById(id);
    }
    async findWorkSheetUserById(id) {
        return this._worksheetsService.findWorkSheetUserById(id);
    }
    async getAllUsersByWorksheetTableId(worksheet_table_id) {
        return this._worksheetsService.getAllUsersByWorksheetId(worksheet_table_id);
    }
    async getAllUsersOfWorksheetUsers(queryParamsDto) {
        return this._worksheetsService.getAllUsersOfWorksheetUser(queryParamsDto);
    }
    async getAllWorksheets(queryParamsDto) {
        return this._worksheetsService.getAllWorksheet(queryParamsDto);
    }
};
__decorate([
    common_1.Get('worksheets/:id'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorksheetsController.prototype, "getWorksheetById", null);
__decorate([
    common_1.Get('worksheet_users/:id'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorksheetsController.prototype, "findWorkSheetUserById", null);
__decorate([
    common_1.Get('worksheet_users/:worksheet_table_id'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Param('worksheet_table_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorksheetsController.prototype, "getAllUsersByWorksheetTableId", null);
__decorate([
    common_1.Get('worksheet_users'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryOptions_dto_1.QueryParamsDto]),
    __metadata("design:returntype", Promise)
], WorksheetsController.prototype, "getAllUsersOfWorksheetUsers", null);
__decorate([
    common_1.Get('worksheets'),
    roles_decorator_1.Roles(constants_1.RoleType.ADMIN),
    common_1.UseGuards(jwtAccessToken_guard_1.JwtAccessTokenGuard, roles_guard_1.RolesGuard),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryOptions_dto_1.QueryParamsDto]),
    __metadata("design:returntype", Promise)
], WorksheetsController.prototype, "getAllWorksheets", null);
WorksheetsController = __decorate([
    common_1.Controller('loanservice/v1/admin'),
    __metadata("design:paramtypes", [worksheet_service_1.WorksheetService])
], WorksheetsController);
exports.WorksheetsController = WorksheetsController;
//# sourceMappingURL=worksheets.controller.js.map