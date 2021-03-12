import { ApiProperty } from '@nestjs/swagger';
import { WorksheetDto } from './WorkSheet.dto';

export class GetAllWorksheetsDto {
  @ApiProperty({ type: WorksheetDto, isArray: true })
  readonly data: WorksheetDto[];
}
