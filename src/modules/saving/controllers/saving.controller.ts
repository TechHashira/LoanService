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
import { UserSavingService } from '../services/userSaving.service';

@Controller('loanservice/v1/admin')
export class UserSavingController {
  constructor(private __userSavingService: UserSavingService) {}

  @Get('savings/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getSavingById(@Param('id', ParseIntPipe) id: number) {
    return this.__userSavingService.getUserSavingById(id);
  }

  @Get('savings')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllSavings(queryParamsDto: QueryParamsDto) {
    return this.__userSavingService.getAllSavings(queryParamsDto);
  }

  @Get('users/:id/savings')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllSavingsByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.__userSavingService.getAllSavingsByUserId(id);
  }
}
