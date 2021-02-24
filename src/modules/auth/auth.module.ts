import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/tocken.service';
import { LocalStrategy } from './strategies/local.strategy';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/common';
import { JwtAccessTokenStrategy } from './strategies/jwtAccessToken.strategy';
import { JwtRefreshTokenStrategy } from './strategies/jwtRefreshToken.strategy';
import { JwtAccessTokenGuard } from './guards/jwtAccessToken.guard';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (_configService: ConfigService) => ({
        secret: _configService.get<string>('JWT_SECRET_ACCESS_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (_configService: ConfigService) => ({
        store: redisStore,
        host: _configService.get('REDIS_HOST'),
        port: _configService.get('REDIS_PORT'),
        ttl: _configService.get<number>('TTL'),
      }),
    }),
  ],
  controllers: [AuthController],
  exports: [AuthService, JwtAccessTokenGuard],
  providers: [
    AuthService,
    TokenService,
    LocalStrategy,
    JwtAccessTokenGuard,
    LocalAuthGuard,
    JwtAccessTokenStrategy,
    JwtRefreshTokenStrategy,
  ],
})
export class AuthModule {}
