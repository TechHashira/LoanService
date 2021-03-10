"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksheetModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_module_1 = require("../admin/admin.module");
const user_module_1 = require("../user/user.module");
const worksheets_controller_1 = require("./controllers/worksheets.controller");
const worksheet_repository_1 = require("./repositories/worksheet.repository");
const worksheetUser_repository_1 = require("./repositories/worksheetUser.repository");
const worksheet_service_1 = require("./services/worksheet.service");
let WorksheetModule = class WorksheetModule {
};
WorksheetModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            common_1.forwardRef(() => admin_module_1.AdminModule),
            typeorm_1.TypeOrmModule.forFeature([worksheetUser_repository_1.WorksheetUserRepository, worksheet_repository_1.WorksheetRepository]),
        ],
        exports: [worksheet_service_1.WorksheetService],
        providers: [worksheet_service_1.WorksheetService],
        controllers: [worksheets_controller_1.WorksheetsController],
    })
], WorksheetModule);
exports.WorksheetModule = WorksheetModule;
//# sourceMappingURL=worksheet.module.js.map