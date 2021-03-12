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
import { UserSavingResponseDto } from '../dtos/userSavingResponse.dto';
import { UserSavingService } from '../services/userSaving.service';

@Controller('loanservice/v1/admin')
@ApiTags('User_Saving')
export class UserSavingController {
  constructor(private __userSavingService: UserSavingService) {}

  @Get('savings/:id')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserSavingResponseDto,
  })
  async getSavingById(@Param('id', ParseIntPipe) id: number) {
    return this.__userSavingService.getUserSavingById(id);
  }

  @Get('savings')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserSavingResponseDto,
  })
  async getAllSavings(@Query() queryParamsDto: QueryParamsDto) {
    return this.__userSavingService.getAllSavings(queryParamsDto);
  }

  @Get('users/:id/savings')
  @Roles(RoleType.ADMIN)
  @UseGuards(JwtAccessTokenGuard, RolesGuard)
  @UseInterceptors(ResponseTransformInterceptor)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: UserSavingResponseDto,
  })
  async getAllSavingsByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.__userSavingService.getAllSavingsByUserId(id);
  }
}
