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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const EmailOrPasswordWrong_exception_1 = require("../../auth/exceptions/EmailOrPasswordWrong.exception");
const userNotFound_exception_1 = require("../../user/exceptions/userNotFound.exception");
const admin_repository_1 = require("../repositories/admin.repository");
let AdminService = class AdminService {
    constructor(_adminRepository) {
        this._adminRepository = _adminRepository;
    }
    async findByEmail(email) {
        const queryBuilder = this._adminRepository.createQueryBuilder('admin_alias');
        try {
            const user = await queryBuilder
                .where('admin_alias.email = :email', { email })
                .getOneOrFail();
            return user;
        }
        catch ({ message }) {
            throw new userNotFound_exception_1.UserNotFoundException(message);
        }
    }
    async findByEmailAuth(email) {
        const queryBuilder = this._adminRepository.createQueryBuilder('admin_alias');
        try {
            const user = await queryBuilder
                .where('admin_alias.email = :email', { email })
                .getOneOrFail();
            return user;
        }
        catch ({ message }) {
            throw new EmailOrPasswordWrong_exception_1.EmailOrPasswordWrong('Email or password Wrong :)');
        }
    }
    async findById(id) {
        const queryBuilder = this._adminRepository.createQueryBuilder('admin_alias');
        try {
            const admin = await queryBuilder
                .where('admin_alias.id = :id', { id })
                .getOneOrFail();
            return admin;
        }
        catch (error) {
            throw new userNotFound_exception_1.UserNotFoundException();
        }
    }
};
AdminService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [admin_repository_1.AdminRepository])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map