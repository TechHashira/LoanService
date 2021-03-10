import { Injectable } from '@nestjs/common';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateLoanDto } from '../dtos/createLoan.dto';
import { LoanEntity } from '../entities/loan.entity';
import { LoanRepository } from '../repositories/loan.repository';

@Injectable()
export class LoanService {
  constructor(
    private _loanRepository: LoanRepository,
    private _userService: UserService,
  ) {}

  public async createLoan(createLoanDto: CreateLoanDto) {
    try {
      const { userId, ...auxCreateLoanDto } = { ...createLoanDto };
      const user = await this._userService.findUserById(userId);
      const loan = this._loanRepository.create({ ...auxCreateLoanDto, user });
      await this._loanRepository.save(loan);
      return loan;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }

  public async getAllLoans(
    queryParamsDto: QueryParamsDto,
  ): Promise<Array<LoanEntity>> {
    const { take } = queryParamsDto;
    const queryBuilder = this._loanRepository.createQueryBuilder('loan_alias');
    const loans = queryBuilder.take(take).getMany();

    return loans;
  }

  public async getLoanById(loanId: number): Promise<LoanEntity> {
    const queryBuilder = this._loanRepository.createQueryBuilder('loan_alias');

    return await queryBuilder
      .where('loan_alias.id = :loanId', { loanId })
      .getOne();
  }
}
