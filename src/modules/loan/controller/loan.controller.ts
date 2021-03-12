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
import { LoanResponse } from '../dtos/LoanResponse.dto';
import { LoanService } from '../services/loan.service';

@Controller('loanservice/v1/admin')
@ApiTags('Loan')
export class LoanController {
  constructor(private _loanService: LoanService) {}

  @Get('loans/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: LoanResponse,
    description: 'Get loan by id.',
  })
  async getLoanById(@Param('id', ParseIntPipe) id: number) {
    return this._loanService.getLoanById(id);
  }

  @Get('loans')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: LoanResponse,
    description: 'Get all ',
  })
  async getAllLoans(@Query() queryParamsDto: QueryParamsDto) {
    return this._loanService.getAllLoans(queryParamsDto);
  }

  @Get('users/:id/loans')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: LoanResponse,
    description: 'Get all loans ffrom an user, by their id',
  })
  async getAllLoansByUserId(@Param('id', ParseIntPipe) id: number) {
    return this._loanService.getAllLoansByUserId(id);
  }
}
