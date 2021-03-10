import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { AdminService } from 'src/modules/admin/services/admin.service';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateWorksheetDto } from '../dtos/createWorksheet.dto';
import { CreateWorksheetUserDto } from '../dtos/createWorksheetUser.dto';
import { WorksheetEntity } from '../entities/worksheet.entity';
import { WorkSheetUserEntity } from '../entities/worksheetUser.entity';
import { WorksheetRepository } from '../repositories/worksheet.repository';
import { WorksheetUserRepository } from '../repositories/worksheetUser.repository';
export declare class WorksheetService {
    private _worksheetRepository;
    private _adminService;
    private _userService;
    private _worksheetUserRepository;
    constructor(_worksheetRepository: WorksheetRepository, _adminService: AdminService, _userService: UserService, _worksheetUserRepository: WorksheetUserRepository);
    createWorksheet(createWorksheetDto: CreateWorksheetDto): Promise<WorksheetEntity>;
    createWorkSheetUser(createWorksheetUserDto: CreateWorksheetUserDto): Promise<WorkSheetUserEntity>;
    findWorkSheetById(id: number): Promise<WorksheetEntity>;
    findWorkSheetUserById(id: number): Promise<WorkSheetUserEntity>;
    getAllUsersByWorksheetId(id: number): Promise<Array<WorkSheetUserEntity>>;
    getAllUsersOfWorksheetUser(queryParamsDto: QueryParamsDto): Promise<Array<WorkSheetUserEntity>>;
    getAllWorksheet(queryParamsDto: QueryParamsDto): Promise<Array<WorksheetEntity>>;
}
