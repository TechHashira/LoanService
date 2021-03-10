import { Injectable } from '@nestjs/common';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateLoanDto } from '../dtos/createLoan.dto';
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
}
