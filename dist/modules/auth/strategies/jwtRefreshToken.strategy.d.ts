import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtRefreshTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshTokenStrategy extends JwtRefreshTokenStrategy_base {
    private _configService;
    constructor(_configService: ConfigService);
    validate(payload: any): Promise<{
        userId: any;
    }>;
}
export {};
