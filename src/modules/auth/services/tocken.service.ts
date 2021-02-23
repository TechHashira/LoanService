import { UnprocessableEntityException } from '@nestjs/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { TokenExpiredError } from 'jsonwebtoken';
import { RefreshTokenRequestDto } from '../dtos/refreshToken.dto';
import { TokenExpiredException } from '../exceptions/tokenExpired.exception';
import { TokenMalformedException } from '../exceptions/tokenMalformed.exception';
import { IRefreshToken } from '../interfaces/refreshToken.interface';

@Injectable()
export class TokenService {
  constructor(
    private _jwtService: JwtService,
    @Inject(CACHE_MANAGER) private _cacheManager: Cache,
    private _configService: ConfigService,
  ) {}

  async generateAccesToken(userId: number) {
    return await this._jwtService.signAsync(
      { sub: userId },
      { expiresIn: this._configService.get<string>('JWT_EXP') },
    );
  }

  async generateRefreshToken(userId: number) {
    const payload = {
      is_revoked: false,
      sub: userId,
    };

    const token = await this._jwtService.signAsync(payload, {
      secret: this._configService.get<string>('JWT_SECRET_REFRESH_TOKEN'),
    });
    await this.addRefreshTokenToCacheStore(token, userId);

    return token;
  }

  private async addRefreshTokenToCacheStore(token: string, userId: number) {
    return await this._cacheManager.set(token, userId);
  }

  async resolveRefreshToken(
    encoded: string,
  ): Promise<{ userIdFromClient: number }> {
    const payload = await this.decodeRefreshToken(encoded);
    const { sub: userIdFromClient } = payload;

    const userIdFromStoredToken = await this.getStoredToken(encoded);

    if (!userIdFromStoredToken) {
      throw new UnprocessableEntityException('Refresh token not found');
    }

    if (userIdFromClient !== userIdFromStoredToken) {
      throw new TokenMalformedException();
    }

    return { userIdFromClient };
  }

  private async decodeRefreshToken(token: string): Promise<IRefreshToken> {
    try {
      return await this._jwtService.verifyAsync(token, {
        secret: this._configService.get<string>('JWT_SECRET_REFRESH_TOKEN'),
      });
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new TokenExpiredException();
      } else {
        console.log('aqi');
        throw new TokenMalformedException();
      }
    }
  }

  private async createAccessTokenFromRefreshToken(
    refresh: string,
  ): Promise<string> {
    const { userIdFromClient } = await this.resolveRefreshToken(refresh);

    if (!userIdFromClient) {
      throw new TokenMalformedException();
    }
    const token = await this.generateAccesToken(userIdFromClient);

    return token;
  }

  private async getStoredToken(token: string) {
    return await this._cacheManager.get(token);
  }

  public async refresh(
    refreshTokenDto: RefreshTokenRequestDto,
  ): Promise<{ access_token: string }> {
    const { refresh_token } = refreshTokenDto;

    console.log(refresh_token);
    const newAccessToken = await this.createAccessTokenFromRefreshToken(
      refresh_token,
    );

    return { access_token: newAccessToken };
  }
}
