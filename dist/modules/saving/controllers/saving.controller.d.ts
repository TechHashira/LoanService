import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { UserSavingService } from '../services/userSaving.service';
export declare class UserSavingController {
    private __userSavingService;
    constructor(__userSavingService: UserSavingService);
    getSavingById(id: number): Promise<import("../entities/user-saving.entity").UserSavingEntity>;
    getAllSavings(queryParamsDto: QueryParamsDto): Promise<import("../entities/user-saving.entity").UserSavingEntity[]>;
    getAllSavingsByUserId(id: number): Promise<import("../entities/user-saving.entity").UserSavingEntity[]>;
}
