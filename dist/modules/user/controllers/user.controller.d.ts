import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { UserService } from '../services/user.service';
export declare class UserController {
    private _userService;
    constructor(_userService: UserService);
    getUser(id: number): Promise<import("../entities").UserEntity>;
    getAllUsers(queryParamsDto: QueryParamsDto): Promise<import("../entities").UserEntity[]>;
}
