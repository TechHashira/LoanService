import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (_configService: ConfigService) => ({
        secret: _configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '5m' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
})
export class AuthModule {}
