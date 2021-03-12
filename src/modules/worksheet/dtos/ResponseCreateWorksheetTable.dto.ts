import { ApiProperty } from '@nestjs/swagger';
import { WorksheetDto } from './WorkSheet.dto';

export class ResponseCreateWorksheetTableDto {
  @ApiProperty({ type: WorksheetDto })
  readonly data: WorksheetDto;
}
