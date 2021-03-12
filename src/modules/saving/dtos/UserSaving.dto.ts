import { ApiProperty } from '@nestjs/swagger';

export class UserSavingDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  dividendsEarned: number;

  @ApiProperty()
  monthlySavingRate: number;

  @ApiProperty()
  userId: number;
}
