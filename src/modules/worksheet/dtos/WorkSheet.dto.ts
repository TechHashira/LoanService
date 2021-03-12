import { ApiProperty } from '@nestjs/swagger';
import { AdminDto } from 'src/modules/admin/dtos/Admin.dto';

export class WorksheetDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: AdminDto })
  adminId: AdminDto;
}
