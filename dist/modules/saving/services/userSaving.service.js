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
exports.UserSavingService = void 0;
const common_1 = require("@nestjs/common");
const createdFailed_exception_1 = require("../../user/exceptions/createdFailed.exception");
const createSaving_dto_1 = require("../dtos/createSaving.dto");
const userSaving_repository_1 = require("../repositories/userSaving.repository");
let UserSavingService = class UserSavingService {
    constructor(_userSavingRepository) {
        this._userSavingRepository = _userSavingRepository;
    }
    async createSaving(userId, monthlyRate) {
        const userSaving = new createSaving_dto_1.CreateSavingDto(userId, monthlyRate);
        try {
            const saving = this._userSavingRepository.create(userSaving);
            await this._userSavingRepository.save(saving);
            return saving;
        }
        catch ({ message }) {
            throw new createdFailed_exception_1.CreatedFailedException(message);
        }
    }
};
UserSavingService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [userSaving_repository_1.UserSavingRepository])
], UserSavingService);
exports.UserSavingService = UserSavingService;
//# sourceMappingURL=userSaving.service.js.map