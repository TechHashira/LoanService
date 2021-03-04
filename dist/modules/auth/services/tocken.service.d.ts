import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { RoleType } from 'src/common/constants';
import { RefreshTokenRequestDto } from '../dtos/refreshToken.dto';
export declare class TokenService {
    private _jwtService;
    private _cacheManager;
    private _configService;
    constructor(_jwtService: JwtService, _cacheManager: Cache, _configService: ConfigService);
    generateAccesToken(userId: number, role: RoleType): Promise<string>;
    generateRefreshToken(userId: number, role: RoleType): Promise<string>;
    private addRefreshTokenToCacheStore;
    resolveRefreshToken(encoded: string): Promise<{
        userIdFromClient: number;
        role: RoleType;
    }>;
    private decodeRefreshToken;
    private createAccessTokenFromRefreshToken;
    private getStoredToken;
    refresh(refreshTokenDto: RefreshTokenRequestDto): Promise<{
        access_token: string;
    }>;
}
