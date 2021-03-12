import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleType } from 'src/common/constants';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { Roles } from 'src/common/rolesDecorator/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAccessTokenGuard } from 'src/modules/auth/guards/jwtAccessToken.guard';
import { UserService } from '../services/user.service';

@Controller('loanservice/v1/admin')
@ApiTags('User')
export class UserController {
  constructor(private _userService: UserService) {}

  @Get('users/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this._userService.findUserById(id);
  }

  @Get('users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  async getAllUsers(@Query() queryParamsDto: QueryParamsDto) {
    return this._userService.findAllUsers(queryParamsDto);
  }
}
