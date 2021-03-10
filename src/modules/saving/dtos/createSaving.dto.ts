import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSavingDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  monthlySavingRate: number;
}
