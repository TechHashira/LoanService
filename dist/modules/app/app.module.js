"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const admin_module_1 = require("../admin/admin.module");
const auth_module_1 = require("../auth/auth.module");
const loan_module_1 = require("../loan/loan.module");
const saving_module_1 = require("../saving/saving.module");
const user_module_1 = require("../user/user.module");
const worksheet_module_1 = require("../worksheet/worksheet.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            loan_module_1.LoanModule,
            admin_module_1.AdminModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            worksheet_module_1.WorksheetModule,
            saving_module_1.SavingModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (_configService) => ({
                    type: 'mysql',
                    host: _configService.get('DB_HOST'),
                    port: _configService.get('DB_PORT'),
                    username: _configService.get('DB_USERNAME'),
                    password: _configService.get('DB_PASSWORD'),
                    database: _configService.get('DB_NAME'),
                    entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
                    migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
                    cli: {
                        migrationsDir: 'src/migrations',
                    },
                    migrationsRun: true,
                    synchronize: false,
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map