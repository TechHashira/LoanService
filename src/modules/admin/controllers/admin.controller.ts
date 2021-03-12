import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RoleType } from 'src/common/constants';
import { Roles } from 'src/common/rolesDecorator/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { ResponseTransformInterceptor } from 'src/interceptors/responseMapping.interceptor';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { JwtAccessTokenGuard } from 'src/modules/auth/guards/jwtAccessToken.guard';
import { CreateLoanDto } from 'src/modules/loan/dtos/createLoan.dto';
import { LoanResponse } from 'src/modules/loan/dtos/LoanResponse.dto';
import { LoanService } from 'src/modules/loan/services/loan.service';
import { CreateSavingDto } from 'src/modules/saving/dtos/createSaving.dto';
import { UserSavingService } from 'src/modules/saving/services/userSaving.service';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateWorksheetDto } from 'src/modules/worksheet/dtos/createWorksheet.dto';
import { CreateWorksheetUserDto } from 'src/modules/worksheet/dtos/createWorksheetUser.dto';
import { ResponseCreateWorksheetTableDto } from 'src/modules/worksheet/dtos/ResponseCreateWorksheetTable.dto';
import { ResponseCreateWorksheetUserDto } from 'src/modules/worksheet/dtos/ResponseCreateWorksheetUser.dto';
import { WorksheetService } from 'src/modules/worksheet/services/worksheet.service';
import { ResponseCreatedSavingDto } from '../dtos/ResponseCreatedSaving.dto';
import { ResponseCreatedUserDto } from '../dtos/ResponseCreatedUser.dto';

@Controller('loanservice/v1/admin')
@ApiTags('Admin')
export class AdminController {
  constructor(
    private readonly _userService: UserService,
    private readonly _userSavingService: UserSavingService,
    private readonly _loanService: LoanService,
    private readonly _worksheetService: WorksheetService,
  ) {}

  @Post('users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: ResponseCreatedUserDto,
    description: 'Successfully Registered',
  })
  async createUser(@Body() userRegisterDto: UserRegisterDto) {
    return this._userService.createUser(userRegisterDto);
  }

  @Post('savings')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: ResponseCreatedSavingDto,
    description: 'Successfully Registered',
  })
  async createSavingUser(@Body() createSavingDto: CreateSavingDto) {
    return this._userSavingService.createSaving(createSavingDto);
  }

  @Post('loans')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({
    status: HttpStatus.CREATED,
    type: LoanResponse,
    description: 'Successfully Registered',
  })
  async createLoan(@Body() createLoanDtom: CreateLoanDto) {
    return this._loanService.createLoan(createLoanDtom);
  }

  @Post('worksheets/tables')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor, ClassSerializerInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: ResponseCreateWorksheetTableDto,
    description: 'Successfully Registered',
  })
  async createWorksheet(@Body() createWorksheetDto: CreateWorksheetDto) {
    return this._worksheetService.createWorksheet(createWorksheetDto);
  }

  @Post('worksheets/users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: ResponseCreateWorksheetUserDto,
    description: 'Successfully Registered',
  })
  async createWorksheetUser(
    @Body() createWorksheetUserDto: CreateWorksheetUserDto,
  ) {
    return this._worksheetService.createWorkSheetUser(createWorksheetUserDto);
  }
}
