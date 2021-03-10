import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { WorksheetService } from '../services/worksheet.service';
export declare class WorksheetsController {
    private _worksheetsService;
    constructor(_worksheetsService: WorksheetService);
    getWorksheetById(id: number): Promise<import("../entities/worksheet.entity").WorksheetEntity>;
    findWorkSheetUserById(id: number): Promise<import("../entities/worksheetUser.entity").WorkSheetUserEntity>;
    getAllUsersByWorksheetTableId(worksheet_table_id: number): Promise<import("../entities/worksheetUser.entity").WorkSheetUserEntity[]>;
    getAllUsersOfWorksheetUsers(queryParamsDto: QueryParamsDto): Promise<import("../entities/worksheetUser.entity").WorkSheetUserEntity[]>;
    getAllWorksheets(queryParamsDto: QueryParamsDto): Promise<import("../entities/worksheet.entity").WorksheetEntity[]>;
}
