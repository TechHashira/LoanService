import { UserSavingRepository } from '../repositories/userSaving.repository';
export declare class UserSavingService {
    private _userSavingRepository;
    constructor(_userSavingRepository: UserSavingRepository);
    createSaving(userId: number, monthlyRate: number): Promise<import("../entities/user-saving.entity").UserSavingEntity>;
}
