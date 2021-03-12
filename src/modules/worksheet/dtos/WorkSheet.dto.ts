import { ApiProperty } from '@nestjs/swagger';

export class WorksheetDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  adminId: number;
}
