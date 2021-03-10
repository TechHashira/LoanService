import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { UserSavingRepository } from './repositories/userSaving.repository';
import { UserSavingService } from './services/userSaving.service';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([UserSavingRepository])],
  exports: [UserSavingService],
  providers: [UserSavingService],
})
export class SavingModule {}
