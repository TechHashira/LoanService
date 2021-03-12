import { ApiProperty } from '@nestjs/swagger';
import { WorksheetUserDto } from './WorksheetUser.dto';

export class ResponseCreateWorksheetUserDto {
  @ApiProperty({ type: WorksheetUserDto })
  readonly data: WorksheetUserDto;
}
