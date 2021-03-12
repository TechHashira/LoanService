import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { WorksheetDto } from './WorkSheet.dto';

export class WorksheetUserDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty({ type: UserDto })
  readonly user: UserDto;

  @ApiProperty()
  readonly worksheet: WorksheetDto;
}
