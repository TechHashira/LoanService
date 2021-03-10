import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserEntity } from 'src/modules/user/entities';

export class LoanResponseDto {
  @ApiProperty()
  loanAmounth: number;

  @ApiProperty()
  interest: number;

  @ApiProperty({ type: UserDto })
  user: UserEntity;

  @ApiProperty()
  id: number;
}
