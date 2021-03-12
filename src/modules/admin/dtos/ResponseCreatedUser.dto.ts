import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/modules/user/dtos/user.dto';

export class ResponseCreatedUserDto {
  @ApiProperty({ type: UserDto })
  readonly data: UserDto;
}
