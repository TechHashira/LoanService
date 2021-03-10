import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { UserSavingController } from './controllers/saving.controller';
import { UserSavingRepository } from './repositories/userSaving.repository';
import { UserSavingService } from './services/userSaving.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([UserSavingRepository])],
  exports: [UserSavingService],
  providers: [UserSavingService],
  controllers: [UserSavingController],
})
export class SavingModule {}
