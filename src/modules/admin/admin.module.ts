import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { LoanModule } from '../loan/loan.module';
import { SavingModule } from '../saving/saving.module';
import { UserModule } from '../user/user.module';
import { WorksheetModule } from '../worksheet/worksheet.module';
import { AdminController } from './controllers/admin.controller';
import { IndexController } from './controllers/index.controller';
import { AdminRepository } from './repositories/admin.repository';
import { AdminService } from './services/admin.service';

@Module({
  imports: [
    UserModule,
    AuthModule,
    SavingModule,
    LoanModule,
    WorksheetModule,
    TypeOrmModule.forFeature([AdminRepository]),
    forwardRef(() => AuthModule),
    forwardRef(() => WorksheetModule),
  ],
  providers: [AdminService],
  exports: [AdminService],
  controllers: [AdminController, IndexController],
})
export class AdminModule {}
