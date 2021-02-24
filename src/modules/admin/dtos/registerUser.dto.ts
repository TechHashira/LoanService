import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { RoleType } from 'src/common/constants';

export class UserRegisterDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ maxLength: 30 })
  readonly fullname: string;

  @IsString()
  @ApiProperty()
  readonly role?: RoleType;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @ApiProperty({ minLength: 6 })
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 9)
  @ApiProperty({ minLength: 9, maxLength: 9 })
  readonly telephone: string;
}
