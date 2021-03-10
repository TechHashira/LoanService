import { RoleType } from 'src/common/constants/role-type.constants';
import { UserEntity } from 'src/modules/user/entities';
import { WorksheetEntity } from 'src/modules/worksheet/entities/worksheet.entity';
export declare class AdminEntity {
    id: number;
    email: string;
    role: RoleType;
    password: string;
    worksheet: WorksheetEntity[];
    constructor(partial: Partial<UserEntity>);
}
