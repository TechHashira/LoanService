import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSavingDto {
  constructor(userId: number, monthlySavingRate: number) {
    this.userId = userId;
    this.monthlySavingRate = monthlySavingRate;
  }

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  monthlySavingRate: number;
}
