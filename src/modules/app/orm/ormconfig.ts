import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AdminEntity } from 'src/modules/admin/entities/admin.entity';
import { LoanEntity } from 'src/modules/loan/entities/loan.entity';
import { UserSavingEntity } from 'src/modules/saving/entities/user-saving.entity';
import { UserEntity } from 'src/modules/user/entities';
import { WorksheetEntity } from 'src/modules/worksheet/entities/worksheet.entity';
import { WorkSheetUserEntity } from 'src/modules/worksheet/entities/worksheetUser.entity';

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    UserEntity,
    LoanEntity,
    UserSavingEntity,
    AdminEntity,
    WorksheetEntity,
    WorkSheetUserEntity,
  ],
  migrations: ['src/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  migrationsRun: true,
  synchronize: false,
};
