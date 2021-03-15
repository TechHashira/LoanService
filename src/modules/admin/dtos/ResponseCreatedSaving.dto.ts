import { ApiProperty } from '@nestjs/swagger';
import { CreatedSavingDto } from 'src/modules/saving/dtos/CreatedSaving.dto';

export class ResponseCreatedSavingDto {
  @ApiProperty({ type: CreatedSavingDto })
  readonly data: CreatedSavingDto;
}
