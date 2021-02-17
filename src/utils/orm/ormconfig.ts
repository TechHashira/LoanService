import { ConfigService } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
const configService = new ConfigService();

const config: ConnectionOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: ['src/modules/**/*{.entity,.index}{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
  logging: true,
};

export = config;
