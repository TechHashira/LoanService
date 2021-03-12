import { ApiProperty } from '@nestjs/swagger';
import { UserSavingDto } from 'src/modules/saving/dtos/UserSaving.dto';

export class ResponseCreatedSavingDto {
  @ApiProperty({ type: UserSavingDto })
  readonly data: UserSavingDto;
}
