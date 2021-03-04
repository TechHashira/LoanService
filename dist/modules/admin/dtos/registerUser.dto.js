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
exports.UserRegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../../common/constants");
class UserRegisterDto {
}
__decorate([
    class_validator_1.IsString(),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "role", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(30),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({ maxLength: 30 }),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "fullname", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(9, 9),
    swagger_1.ApiProperty({ minLength: 9, maxLength: 9 }),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "telephone", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], UserRegisterDto.prototype, "monthlySavingRate", void 0);
exports.UserRegisterDto = UserRegisterDto;
//# sourceMappingURL=registerUser.dto.js.map