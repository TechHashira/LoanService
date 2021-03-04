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
exports.AdminEntity = void 0;
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../user/entities");
const worksheet_entity_1 = require("../../worksheet/entities/worksheet.entity");
const typeorm_1 = require("typeorm");
let AdminEntity = class AdminEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AdminEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], AdminEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    class_transformer_1.Exclude(),
    __metadata("design:type", String)
], AdminEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(() => worksheet_entity_1.WorksheetEntity, (worksheet) => worksheet.admin),
    __metadata("design:type", Array)
], AdminEntity.prototype, "worksheet", void 0);
AdminEntity = __decorate([
    typeorm_1.Entity({ name: 'admin' }),
    __metadata("design:paramtypes", [Object])
], AdminEntity);
exports.AdminEntity = AdminEntity;
//# sourceMappingURL=admin.entity.js.map