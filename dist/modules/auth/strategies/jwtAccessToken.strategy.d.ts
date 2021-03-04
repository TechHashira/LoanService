import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    private _configService;
    constructor(_configService: ConfigService);
    validate(payload: any): Promise<{
        userId: any;
        role: any;
    }>;
}
export {};
