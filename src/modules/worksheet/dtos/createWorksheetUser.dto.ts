import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWorksheetUserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  worksheetId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  userId: number;
}
