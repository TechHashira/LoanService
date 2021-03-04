import { UserEntity } from 'src/modules/user/entities';
import { WorksheetEntity } from 'src/modules/worksheet/entities/worksheet.entity';
export declare class AdminEntity {
    id: number;
    email: string;
    password: string;
    worksheet: WorksheetEntity[];
    constructor(partial: Partial<UserEntity>);
}
