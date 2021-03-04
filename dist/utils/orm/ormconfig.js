"use strict";
const config_1 = require("@nestjs/config");
const configService = new config_1.ConfigService();
const config = {
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: ['src/modules/**/*{.entity,.index}{.ts,.js}'],
    migrations: ['src/migrations/*{.ts,.js}'],
    migrationsRun: true,
    synchronize: false,
    logging: true,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map