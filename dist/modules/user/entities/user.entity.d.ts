import { RoleType } from 'src/common/constants';
import { LoanEntity } from 'src/modules/loan/entities/loan.entity';
import { UserSavingEntity } from 'src/modules/saving/entities/user-saving.entity';
import { WorkSheetUserEntity } from 'src/modules/worksheet/entities/worksheetUser.entity';
export declare class UserEntity {
    id: number;
    role: RoleType;
    fullname: string;
    telephone: string;
    userSaving: UserSavingEntity[];
    loan: LoanEntity[];
    workshetUser: WorkSheetUserEntity[];
}
