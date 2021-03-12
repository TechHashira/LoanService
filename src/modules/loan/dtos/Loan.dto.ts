import { ApiProperty } from '@nestjs/swagger';

export class LoanDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  loanAmounth: number;

  @ApiProperty()
  interest: number;

  @ApiProperty()
  userId: number;
}
