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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksheetService = void 0;
const common_1 = require("@nestjs/common");
const queryOptions_dto_1 = require("../../../common/dtos/queryOptions.dto");
const admin_service_1 = require("../../admin/services/admin.service");
const createdFailed_exception_1 = require("../../user/exceptions/createdFailed.exception");
const user_service_1 = require("../../user/services/user.service");
const WorksheetNotFoundExceptio_1 = require("../exceptions/WorksheetNotFoundExceptio");
const worksheet_repository_1 = require("../repositories/worksheet.repository");
const worksheetUser_repository_1 = require("../repositories/worksheetUser.repository");
let WorksheetService = class WorksheetService {
    constructor(_worksheetRepository, _adminService, _userService, _worksheetUserRepository) {
        this._worksheetRepository = _worksheetRepository;
        this._adminService = _adminService;
        this._userService = _userService;
        this._worksheetUserRepository = _worksheetUserRepository;
    }
    async createWorksheet(createWorksheetDto) {
        try {
            const { adminId } = createWorksheetDto;
            const admin = await this._adminService.findById(adminId);
            const worksheet = this._worksheetRepository.create({ admin });
            await this._worksheetRepository.save(worksheet);
            return worksheet;
        }
        catch ({ message }) {
            throw new createdFailed_exception_1.CreatedFailedException(message);
        }
    }
    async createWorkSheetUser(createWorksheetUserDto) {
        try {
            const { worksheetId, userId } = createWorksheetUserDto;
            const worksheet = await this.findWorkSheetById(worksheetId);
            const user = await this._userService.findUserById(userId);
            const worksheetUser = this._worksheetUserRepository.create({
                worksheet,
                user,
            });
            await this._worksheetUserRepository.save(worksheetUser);
            return worksheetUser;
        }
        catch ({ message }) {
            throw new createdFailed_exception_1.CreatedFailedException(message);
        }
    }
    async findWorkSheetById(id) {
        const queryBuilder = this._worksheetRepository.createQueryBuilder('worksheet_alias');
        try {
            const worksheet = await queryBuilder
                .where('worksheet_alias.id = :id', { id })
                .getOneOrFail();
            return worksheet;
        }
        catch (error) {
            throw new WorksheetNotFoundExceptio_1.WorksheetNotFoundException();
        }
    }
    async findWorkSheetUserById(id) {
        const queryBuilder = this._worksheetUserRepository.createQueryBuilder('worksheetUser_alias');
        try {
            const worksheetUser = await queryBuilder
                .where('worksheetUser_alias.id = :id', { id })
                .getOneOrFail();
            return worksheetUser;
        }
        catch (error) {
            throw new WorksheetNotFoundExceptio_1.WorksheetNotFoundException();
        }
    }
    async getAllUsersByWorksheetId(id) {
        const queryBuilder = this._worksheetUserRepository.createQueryBuilder('worksheetUser_alias');
        try {
            const worksheetUsers = await queryBuilder
                .where('worksheetUser_alias.userId = :id', { id })
                .getMany();
            return worksheetUsers;
        }
        catch (error) {
            throw new WorksheetNotFoundExceptio_1.WorksheetNotFoundException();
        }
    }
    async getAllUsersOfWorksheetUser(queryParamsDto) {
        const { take } = queryParamsDto;
        const queryBuilder = this._worksheetUserRepository.createQueryBuilder('worksheetUser_alias');
        try {
            const worksheetUsers = await queryBuilder.take(take).getMany();
            return worksheetUsers;
        }
        catch (error) {
            throw new WorksheetNotFoundExceptio_1.WorksheetNotFoundException();
        }
    }
    async getAllWorksheet(queryParamsDto) {
        const { take } = queryParamsDto;
        const queryBuilder = this._worksheetRepository.createQueryBuilder('worksheet_alias');
        try {
            const worksheets = await queryBuilder.take(take).getMany();
            return worksheets;
        }
        catch (error) {
            throw new WorksheetNotFoundExceptio_1.WorksheetNotFoundException();
        }
    }
};
WorksheetService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [worksheet_repository_1.WorksheetRepository,
        admin_service_1.AdminService,
        user_service_1.UserService,
        worksheetUser_repository_1.WorksheetUserRepository])
], WorksheetService);
exports.WorksheetService = WorksheetService;
//# sourceMappingURL=worksheet.service.js.map