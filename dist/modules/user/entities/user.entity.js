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
exports.UserEntity = void 0;
const constants_1 = require("../../../common/constants");
const loan_entity_1 = require("../../loan/entities/loan.entity");
const user_saving_entity_1 = require("../../saving/entities/user-saving.entity");
const worksheetUser_entity_1 = require("../../worksheet/entities/worksheetUser.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'enum', enum: constants_1.RoleType, default: constants_1.RoleType.USER_A }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "fullname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "telephone", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_saving_entity_1.UserSavingEntity, (userSaving) => userSaving.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "userSaving", void 0);
__decorate([
    typeorm_1.OneToMany(() => loan_entity_1.LoanEntity, (loan) => loan.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "loan", void 0);
__decorate([
    typeorm_1.OneToMany(() => worksheetUser_entity_1.WorkSheetUserEntity, (workshetUser) => workshetUser.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "workshetUser", void 0);
UserEntity = __decorate([
    typeorm_1.Entity({ name: 'user' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map