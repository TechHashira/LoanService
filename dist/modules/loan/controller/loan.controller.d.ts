import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { LoanService } from '../services/loan.service';
export declare class LoanController {
    private _loanService;
    constructor(_loanService: LoanService);
    getLoanById(id: number): Promise<import("../entities/loan.entity").LoanEntity>;
    getAllLoans(queryParamsDto: QueryParamsDto): Promise<import("../entities/loan.entity").LoanEntity[]>;
    getAllLoansByUserId(id: number): Promise<import("../entities/loan.entity").LoanEntity[]>;
}
