import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';

@Controller('admin/')
export class AdminController {
  constructor(private readonly _userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('register')
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
