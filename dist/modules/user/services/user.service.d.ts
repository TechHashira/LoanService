import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { UserSavingService } from 'src/modules/saving/services/userSaving.service';
import { UserRepository } from '../repositories/user.repository';
export declare class UserService {
    private _userRepository;
    private _authService;
    private _userSavingService;
    constructor(_userRepository: UserRepository, _authService: AuthService, _userSavingService: UserSavingService);
    createUser(userRegisterDto: UserRegisterDto): Promise<import("../entities").UserEntity>;
    findOne(email: string): Promise<import("../entities").UserEntity>;
    findUserById(userId: number): Promise<import("../entities").UserEntity>;
}
