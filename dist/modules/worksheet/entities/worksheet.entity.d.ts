import { AdminEntity } from 'src/modules/admin/entities/admin.entity';
import { WorkSheetUserEntity } from './worksheetUser.entity';
export declare class WorksheetEntity {
    id: number;
    admin: AdminEntity;
    worksheetUser: WorkSheetUserEntity[];
}
