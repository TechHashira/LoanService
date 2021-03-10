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
import { ApiOkResponse } from '@nestjs/swagger';
import { RoleType } from 'src/common/constants';
import { Roles } from 'src/common/rolesDecorator/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { JwtAccessTokenGuard } from 'src/modules/auth/guards/jwtAccessToken.guard';
import { CreateLoanDto } from 'src/modules/loan/dtos/createLoan.dto';
import { LoanService } from 'src/modules/loan/services/loan.service';
import { CreateSavingDto } from 'src/modules/saving/dtos/createSaving.dto';
import { UserSavingService } from 'src/modules/saving/services/userSaving.service';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateWorksheetDto } from 'src/modules/worksheet/dtos/createWorksheet.dto';
import { CreateWorksheetUserDto } from 'src/modules/worksheet/dtos/createWorksheetUser.dto';
import { WorksheetService } from 'src/modules/worksheet/services/worksheet.service';
import { LoanResponseDto } from '../dtos/loanResponse.dto';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly _userService: UserService,
    private readonly _userSavingService: UserSavingService,
    private readonly _loanService: LoanService,
    private readonly _worksheetService: WorksheetService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: UserRegisterDto,
    description: 'Successfully Registered',
  })
  async createUser(@Body() userRegisterDto: UserRegisterDto) {
    return this._userService.createUser(userRegisterDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('savings')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: CreateSavingDto,
    description: 'Successfully Registered',
  })
  async createSavingUser(@Body() createSavingDto: CreateSavingDto) {
    return this._userSavingService.createSaving(createSavingDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('loans')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: LoanResponseDto,
    description: 'Successfully Registered',
  })
  async createLoan(@Body() createLoanDtom: CreateLoanDto) {
    return this._loanService.createLoan(createLoanDtom);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('worksheets/tables')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: CreateWorksheetDto,
    description: 'Successfully Registered',
  })
  async createWorksheet(@Body() createWorksheetDto: CreateWorksheetDto) {
    return this._worksheetService.createWorksheet(createWorksheetDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('worksheets/users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: CreateWorksheetDto,
    description: 'Successfully Registered',
  })
  async createWorksheetUser(
    @Body() createWorksheetUserDto: CreateWorksheetUserDto,
  ) {
    return this._worksheetService.createWorkSheetUser(createWorksheetUserDto);
  }
}
