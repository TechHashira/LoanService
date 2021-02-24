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
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly _userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: UserDto,
    description: 'Successfully Registered',
  })
  async createUser(@Body() userRegisterDto: UserRegisterDto) {
    return this._userService.createUser(userRegisterDto);
  }
}
