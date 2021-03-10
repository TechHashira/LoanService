import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { RoleType } from 'src/common/constants';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { Roles } from 'src/common/rolesDecorator/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAccessTokenGuard } from 'src/modules/auth/guards/jwtAccessToken.guard';
import { LoanService } from '../services/loan.service';

@Controller('loanservice/v1/admin/')
export class LoanController {
  constructor(private _loanService: LoanService) {}

  @Get('loans/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getLoanById(@Param('id', ParseIntPipe) id: number) {
    return this._loanService.getLoanById(id);
  }

  @Get('loans')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllLoans(queryParamsDto: QueryParamsDto) {
    return this._loanService.getAllLoans(queryParamsDto);
  }
}
