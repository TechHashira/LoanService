import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { TokenService } from './tocken.service';
import { ConfigService } from '@nestjs/config';
import { AdminService } from 'src/modules/admin/services/admin.service';
import { AdminRegisterDto } from 'src/modules/admin/dtos/adminRegister.dto';
export declare class AuthService {
    private _tokenService;
    private _userService;
    private _adminService;
    private _configService;
    constructor(_tokenService: TokenService, _userService: UserService, _adminService: AdminService, _configService: ConfigService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        role: import("../../../common/constants").RoleType;
        worksheet: import("../../worksheet/entities/worksheet.entity").WorksheetEntity[];
    }>;
    login(user: UserDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    hashPassword(userRegisterDto: AdminRegisterDto): Promise<AdminRegisterDto>;
}
