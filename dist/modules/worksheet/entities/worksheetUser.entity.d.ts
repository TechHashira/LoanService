import { UserEntity } from 'src/modules/user/entities';
import { WorksheetEntity } from './worksheet.entity';
export declare class WorkSheetUserEntity {
    id: number;
    user: UserEntity;
    worksheet: WorksheetEntity;
}
