import { ApiProperty } from '@nestjs/swagger';

export class WorksheetUserDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly worksheetId: number;
}
