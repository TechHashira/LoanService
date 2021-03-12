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
import { UserRespose } from '../dtos/userResponse.dto';
import { UserService } from '../services/user.service';

@Controller('loanservice/v1/admin')
@ApiTags('User')
export class UserController {
  constructor(private _userService: UserService) {}

  @Get('users/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserRespose,
    description: 'Get User By id',
  })
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this._userService.findUserById(id);
  }

  @Get('users')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserRespose,
    description: 'Get all users',
  })
  async getAllUsers(@Query() queryParamsDto: QueryParamsDto) {
    return this._userService.findAllUsers(queryParamsDto);
  }
}
