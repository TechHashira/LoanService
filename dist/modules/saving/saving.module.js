"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const userSaving_repository_1 = require("./repositories/userSaving.repository");
const userSaving_service_1 = require("./services/userSaving.service");
let SavingModule = class SavingModule {
};
SavingModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([userSaving_repository_1.UserSavingRepository])],
        providers: [userSaving_service_1.UserSavingService],
        exports: [userSaving_service_1.UserSavingService],
    })
], SavingModule);
exports.SavingModule = SavingModule;
//# sourceMappingURL=saving.module.js.map