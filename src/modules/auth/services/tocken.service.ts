import { UnprocessableEntityException } from '@nestjs/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { TokenExpiredError } from 'jsonwebtoken';
import { IRefreshToken } from '../interfaces/refreshToken.interface';

@Injectable()
export class TokenService {
  constructor(
    private _jwtService: JwtService,
    @Inject(CACHE_MANAGER) private _cacheManager: Cache,
    private _configService: ConfigService,
  ) {}

  async generateAccesToken(userId: number) {
    const expiration = new Date();
    const exp =
      expiration.getTime() + Number(this._configService.get<number>('JWT_EXP'));

    return await this._jwtService.signAsync({ sub: userId, exp });
  }

  async generateRefreshToken(userId: number) {
    const payload = {
      is_revoked: false,
      sub: userId,
    };

    const token = await this._jwtService.signAsync(payload);
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
      throw new UnprocessableEntityException('Refresh token malformed');
    }

    return { userIdFromClient };
  }

  private async decodeRefreshToken(token: string): Promise<IRefreshToken> {
    try {
      return await this._jwtService.verifyAsync(token);
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new UnprocessableEntityException('Refresh token expired');
      } else {
        throw new UnprocessableEntityException('Refresh token malformed');
      }
    }
  }

  public async createAccessTokenFromRefreshToken(
    refresh: string,
  ): Promise<{ token: string }> {
    const { userIdFromClient } = await this.resolveRefreshToken(refresh);

    const token = await this.generateAccesToken(userIdFromClient);

    return { token };
  }
  private async getStoredToken(token: string) {
    return await this._cacheManager.get(token);
  }
}
