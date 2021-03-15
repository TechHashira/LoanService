import { ApiProperty } from '@nestjs/swagger';

export class CreatedSavingDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  monthlySavingRate: number;

  @ApiProperty()
  dividendsEarned: number;
}
