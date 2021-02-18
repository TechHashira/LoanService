import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AdminController } from './controllers/admin.controller';

@Module({
  imports: [UserModule],
  controllers: [AdminController],
})
export class AdminModule {}
