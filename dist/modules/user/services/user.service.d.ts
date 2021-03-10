import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { UserEntity } from '../entities';
import { UserRepository } from '../repositories/user.repository';
export declare class UserService {
    private _userRepository;
    private _authService;
    constructor(_userRepository: UserRepository, _authService: AuthService);
    createUser(userRegisterDto: UserRegisterDto): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
    findUserById(userId: number): Promise<UserEntity>;
    findAllUsers(queryParamsDto: QueryParamsDto): Promise<Array<UserEntity>>;
}
