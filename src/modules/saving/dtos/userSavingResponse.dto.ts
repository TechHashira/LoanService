import { ApiProperty } from '@nestjs/swagger';
import { UserSavingDto } from './UserSaving.dto';

export class UserSavingResponseDto {
  @ApiProperty({ type: UserSavingDto, isArray: true })
  readonly data: UserSavingDto;
}
