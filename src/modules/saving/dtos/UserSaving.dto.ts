import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/modules/user/dtos/user.dto';

export class UserSavingDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  dividendsEarned: number;

  @ApiProperty()
  monthlySavingRate: number;

  @ApiProperty({ type: UserDto })
  userId: UserDto;
}
