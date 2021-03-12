import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleType } from 'src/common/constants';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { Roles } from 'src/common/rolesDecorator/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ResponseTransformInterceptor } from 'src/interceptors/responseMapping.interceptor';
import { JwtAccessTokenGuard } from 'src/modules/auth/guards/jwtAccessToken.guard';
import { GetAllWorksheetsUserDto } from '../dtos/getAllWorksheetUser.dto';
import { GetAllWorksheetsDto } from '../dtos/getWorksheets.dto';
import { WorksheetService } from '../services/worksheet.service';

@Controller('loanservice/v1/admin')
@ApiTags('Worksheet')
export class WorksheetsController {
  constructor(private _worksheetsService: WorksheetService) {}

  @Get('worksheets/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetAllWorksheetsDto,
    isArray: false,
    description: 'Get one Worksheet by id (worksheet id)',
  })
  async getWorksheetById(@Param('id', ParseIntPipe) id: number) {
    return this._worksheetsService.findWorkSheetById(id);
  }

  @Get('worksheet_users/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetAllWorksheetsUserDto,
    isArray: false,
    description: 'Get one Worksheet User by id (worksheetuser id)',
  })
  async findWorkSheetUserById(@Param('id', ParseIntPipe) id: number) {
    return this._worksheetsService.findWorkSheetUserById(id);
  }

  @Get('worksheet_users/tables/:worksheet_table_id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetAllWorksheetsUserDto,
    description:
      'Get all WorksheetsUser from a table id this tables are assigned to each admin',
  })
  async getAllUsersByWorksheetTableId(
    @Param('worksheet_table_id', ParseIntPipe) worksheet_table_id: number,
  ) {
    return this._worksheetsService.getAllUsersByWorksheetId(worksheet_table_id);
  }

  @Get('worksheet_users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetAllWorksheetsUserDto,
    description: 'Get all WorksheetsUser',
  })
  async getAllUsersOfWorksheetUsers(@Query() queryParamsDto: QueryParamsDto) {
    return this._worksheetsService.getAllUsersOfWorksheetUser(queryParamsDto);
  }

  @Get('worksheets')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetAllWorksheetsDto,
    description: 'get all worksheets',
  })
  async getAllWorksheets(@Query() queryParamsDto: QueryParamsDto) {
    return this._worksheetsService.getAllWorksheet(queryParamsDto);
  }
}
