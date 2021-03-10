import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateSavingDto } from '../dtos/createSaving.dto';
import { UserSavingEntity } from '../entities/user-saving.entity';
import { UserSavingRepository } from '../repositories/userSaving.repository';
export declare class UserSavingService {
    private _userSavingRepository;
    private _userService;
    constructor(_userSavingRepository: UserSavingRepository, _userService: UserService);
    createSaving(createSavingDto: CreateSavingDto): Promise<UserSavingEntity>;
    getAllSavings(queryParamsDto: QueryParamsDto): Promise<Array<UserSavingEntity>>;
    getUserSavingById(userSavingId: number): Promise<UserSavingEntity>;
    getAllSavingsByUserId(id: number): Promise<Array<UserSavingEntity>>;
}
