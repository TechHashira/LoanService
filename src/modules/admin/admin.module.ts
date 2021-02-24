import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { AdminController } from './controllers/admin.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AdminController],
})
export class AdminModule {}
