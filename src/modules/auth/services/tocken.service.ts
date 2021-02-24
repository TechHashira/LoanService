import { UnprocessableEntityException } from '@nestjs/common';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { TokenExpiredError } from 'jsonwebtoken';
import { RoleType } from 'src/common/constants';
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

  async generateAccesToken(userId: number, role: RoleType) {
    return await this._jwtService.signAsync(
      { sub: userId, role },
      { expiresIn: this._configService.get<string>('JWT_EXP') },
    );
  }

  async generateRefreshToken(userId: number, role: RoleType) {
    const payload = {
      is_revoked: false,
      sub: userId,
      role,
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
  ): Promise<{ userIdFromClient: number; role: RoleType }> {
    const payload = await this.decodeRefreshToken(encoded);
    const { sub: userIdFromClient, role } = payload;

    const userIdFromStoredToken = await this.getStoredToken(encoded);

    if (!userIdFromStoredToken) {
      throw new UnprocessableEntityException('Refresh token not found');
    }

    if (userIdFromClient !== userIdFromStoredToken) {
      throw new TokenMalformedException();
    }

    return { userIdFromClient, role };
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
        throw new TokenMalformedException();
      }
    }
  }

  private async createAccessTokenFromRefreshToken(
    refresh: string,
  ): Promise<string> {
    const { userIdFromClient, role } = await this.resolveRefreshToken(refresh);

    if (!userIdFromClient) {
      throw new TokenMalformedException();
    }
    const token = await this.generateAccesToken(userIdFromClient, role);

    return token;
  }

  private async getStoredToken(token: string) {
    return await this._cacheManager.get(token);
  }

  public async refresh(
    refreshTokenDto: RefreshTokenRequestDto,
  ): Promise<{ access_token: string }> {
    const { refresh_token } = refreshTokenDto;

    const newAccessToken = await this.createAccessTokenFromRefreshToken(
      refresh_token,
    );

    return { access_token: newAccessToken };
  }
}
