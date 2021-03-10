import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from '../admin/admin.module';
import { UserModule } from '../user/user.module';
import { WorksheetRepository } from './repositories/worksheet.repository';
import { WorksheetUserRepository } from './repositories/worksheetUser.repository';
import { WorksheetService } from './services/worksheet.service';

@Module({
  imports: [
    UserModule,
    forwardRef(() => AdminModule),
    TypeOrmModule.forFeature([WorksheetUserRepository, WorksheetRepository]),
  ],
  exports: [WorksheetService],
  providers: [WorksheetService],
})
export class WorksheetModule {}
