import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';

export class UserRespose {
  @ApiProperty({ type: UserDto, isArray: true })
  readonly data: UserDto;
}
