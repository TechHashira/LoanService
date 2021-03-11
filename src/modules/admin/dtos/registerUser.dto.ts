import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { RoleType } from 'src/common/constants';

export class UserRegisterDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly role?: RoleType;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ maxLength: 30 })
  readonly fullname: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 9)
  @ApiProperty({ minLength: 9, maxLength: 9 })
  readonly telephone: string;
}
