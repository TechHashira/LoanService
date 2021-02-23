import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty } from 'class-validator';

export class RefreshTokenRequestDto {
  @IsNotEmpty()
  @IsJWT()
  @ApiProperty()
  readonly refresh_token: string;
}
