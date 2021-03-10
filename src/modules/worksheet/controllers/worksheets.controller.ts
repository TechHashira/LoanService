import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RoleType } from 'src/common/constants';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { Roles } from 'src/common/rolesDecorator/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAccessTokenGuard } from 'src/modules/auth/guards/jwtAccessToken.guard';
import { WorksheetService } from '../services/worksheet.service';

@Controller('loanservice/v1/admin')
export class WorksheetsController {
  constructor(private _worksheetsService: WorksheetService) {}

  @Get('worksheets/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getWorksheetById(@Param('id', ParseIntPipe) id: number) {
    return this._worksheetsService.findWorkSheetById(id);
  }

  @Get('worksheet_users/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async findWorkSheetUserById(@Param('id', ParseIntPipe) id: number) {
    return this._worksheetsService.findWorkSheetUserById(id);
  }

  @Get('worksheet_users/:worksheet_table_id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllUsersByWorksheetTableId(
    @Param('worksheet_table_id', ParseIntPipe) worksheet_table_id: number,
  ) {
    return this._worksheetsService.getAllUsersByWorksheetId(worksheet_table_id);
  }

  @Get('worksheet_users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllUsersOfWorksheetUsers(@Query() queryParamsDto: QueryParamsDto) {
    return this._worksheetsService.getAllUsersOfWorksheetUser(queryParamsDto);
  }

  @Get('worksheets')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllWorksheets(@Query() queryParamsDto: QueryParamsDto) {
    return this._worksheetsService.getAllWorksheet(queryParamsDto);
  }
}
