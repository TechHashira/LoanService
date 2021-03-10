import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateLoanDto } from '../dtos/createLoan.dto';
import { LoanEntity } from '../entities/loan.entity';
import { LoanRepository } from '../repositories/loan.repository';
export declare class LoanService {
    private _loanRepository;
    private _userService;
    constructor(_loanRepository: LoanRepository, _userService: UserService);
    createLoan(createLoanDto: CreateLoanDto): Promise<LoanEntity>;
    getAllLoans(queryParamsDto: QueryParamsDto): Promise<Array<LoanEntity>>;
    getLoanById(loanId: number): Promise<LoanEntity>;
    getAllLoansByUserId(id: number): Promise<Array<LoanEntity>>;
}
