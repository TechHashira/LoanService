import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSavingRepository } from './repositories/userSaving.repository';
import { UserSavingService } from './services/userSaving.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSavingRepository])],
  providers: [UserSavingService],
  exports: [UserSavingService],
})
export class SavingModule {}
