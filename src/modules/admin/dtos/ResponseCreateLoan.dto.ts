import { ApiProperty } from '@nestjs/swagger';
import { CreateLoanDto } from 'src/modules/loan/dtos/createLoan.dto';

export class ResponseCreateLoanDto {
  @ApiProperty({ type: CreateLoanDto })
  readonly data: CreateLoanDto;
}
