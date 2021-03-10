import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { CreateLoanDto } from 'src/modules/loan/dtos/createLoan.dto';
import { LoanService } from 'src/modules/loan/services/loan.service';
import { CreateSavingDto } from 'src/modules/saving/dtos/createSaving.dto';
import { UserSavingService } from 'src/modules/saving/services/userSaving.service';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateWorksheetDto } from 'src/modules/worksheet/dtos/createWorksheet.dto';
import { CreateWorksheetUserDto } from 'src/modules/worksheet/dtos/createWorksheetUser.dto';
import { WorksheetService } from 'src/modules/worksheet/services/worksheet.service';
export declare class AdminController {
    private readonly _userService;
    private readonly _userSavingService;
    private readonly _loanService;
    private readonly _worksheetService;
    constructor(_userService: UserService, _userSavingService: UserSavingService, _loanService: LoanService, _worksheetService: WorksheetService);
    createUser(userRegisterDto: UserRegisterDto): Promise<import("../../user/entities").UserEntity>;
    createSavingUser(createSavingDto: CreateSavingDto): Promise<import("../../saving/entities/user-saving.entity").UserSavingEntity>;
    createLoan(createLoanDtom: CreateLoanDto): Promise<import("../../loan/entities/loan.entity").LoanEntity>;
    createWorksheet(createWorksheetDto: CreateWorksheetDto): Promise<import("../../worksheet/entities/worksheet.entity").WorksheetEntity>;
    createWorksheetUser(createWorksheetUserDto: CreateWorksheetUserDto): Promise<import("../../worksheet/entities/worksheetUser.entity").WorkSheetUserEntity>;
}
