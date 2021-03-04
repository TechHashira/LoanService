import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { UserService } from 'src/modules/user/services/user.service';
export declare class AdminController {
    private readonly _userService;
    constructor(_userService: UserService);
    createUser(userRegisterDto: UserRegisterDto): Promise<import("../../user/entities").UserEntity>;
}
