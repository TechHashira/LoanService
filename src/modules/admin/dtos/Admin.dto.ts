import { ApiProperty } from '@nestjs/swagger';
import { RoleType } from 'src/common/constants';

export class AdminDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: RoleType;
}
