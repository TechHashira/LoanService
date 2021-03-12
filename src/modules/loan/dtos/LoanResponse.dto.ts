import { ApiProperty } from '@nestjs/swagger';
import { LoanDto } from './Loan.dto';

export class LoanResponse {
  @ApiProperty({ type: LoanDto, isArray: true })
  readonly data: LoanDto;
}
