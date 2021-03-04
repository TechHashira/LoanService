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
exports.LoanEntity = void 0;
const entities_1 = require("../../user/entities");
const typeorm_1 = require("typeorm");
let LoanEntity = class LoanEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LoanEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LoanEntity.prototype, "loanAmounth", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LoanEntity.prototype, "interest", void 0);
__decorate([
    typeorm_1.ManyToOne(() => entities_1.UserEntity, (user) => user.loan),
    typeorm_1.JoinColumn(),
    __metadata("design:type", entities_1.UserEntity)
], LoanEntity.prototype, "user", void 0);
LoanEntity = __decorate([
    typeorm_1.Entity({ name: 'loan' })
], LoanEntity);
exports.LoanEntity = LoanEntity;
//# sourceMappingURL=loan.entity.js.map