import { ApiProperty } from '@nestjs/swagger';
import { WorksheetUserDto } from './WorksheetUser.dto';

export class GetAllWorksheetsUserDto {
  @ApiProperty({ type: WorksheetUserDto, isArray: true })
  readonly data: WorksheetUserDto[];
}
