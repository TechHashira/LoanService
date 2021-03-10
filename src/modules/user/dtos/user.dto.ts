import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RoleType } from 'src/common/constants';

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  telephone: string;

  @ApiPropertyOptional()
  role: RoleType;
}
