import { Injectable } from '@nestjs/common';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { CreateLoanDto } from '../dtos/createLoan.dto';
import { LoanRepository } from '../repositories/loan.repository';

@Injectable()
export class LoanService {
  constructor(private _loanRepository: LoanRepository) {}

  public async createLoan(createLoanDto: CreateLoanDto) {
    try {
      const loan = this._loanRepository.create(createLoanDto);
      await this._loanRepository.save(loan);
      return loan;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }
}
