import { Injectable } from '@nestjs/common';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { UserNotFoundException } from 'src/modules/user/exceptions/userNotFound.exception';
import { CreateLoanDto } from '../dtos/createLoan.dto';
import { LoanEntity } from '../entities/loan.entity';
import { LoanRepository } from '../repositories/loan.repository';

@Injectable()
export class LoanService {
  constructor(private _loanRepository: LoanRepository) {}

  public async createLoan(createLoanDto: CreateLoanDto) {
    try {
      const loan = this._loanRepository.create({ ...createLoanDto });
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
    const queryBuilder = this._loanRepository.createQueryBuilder();
    const loans = queryBuilder.take(take).execute();

    return loans;
  }

  public async getLoanById(loanId: number): Promise<LoanEntity> {
    const queryBuilder = this._loanRepository.createQueryBuilder();

    return await queryBuilder
      .select('*')
      .where('id = :loanId', { loanId })
      .execute();
  }

  public async getAllLoansByUserId(id: number): Promise<Array<LoanEntity>> {
    const queryBuilder = this._loanRepository.createQueryBuilder();

    try {
      const loans = await queryBuilder
        .select('*')
        .where('userId = :id', { id })
        .execute();

      return loans;
    } catch ({ message }) {
      throw new UserNotFoundException(message);
    }
  }
}
