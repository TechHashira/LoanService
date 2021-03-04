import { RefreshTokenRequestDto } from '../dtos/refreshToken.dto';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/tocken.service';
export declare class AuthController {
    private _authService;
    private _tokenService;
    constructor(_authService: AuthService, _tokenService: TokenService);
    login({ user }: {
        user: any;
    }): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    getUser(body: RefreshTokenRequestDto): Promise<{
        access_token: string;
    }>;
}
