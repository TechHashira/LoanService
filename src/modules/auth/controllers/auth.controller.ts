import {
  Controller,
  Post,
  UseGuards,
  Body,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccessTokenDto } from '../dtos/accessTokenDto.dto';
import { LoginResponseDto } from '../dtos/loginResponse.dto';
import { RefreshTokenRequestDto } from '../dtos/refreshToken.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/tocken.service';

@Controller('loanservice/v1/auth')
export class AuthController {
  constructor(
    private _authService: AuthService,
    private _tokenService: TokenService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: LoginResponseDto,
    description: 'Logged succesfully!',
  })
  async login(@Req() { user }) {
    return await this._authService.login(user);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    status: HttpStatus.OK,
    type: AccessTokenDto,
    description: 'Access_token created',
  })
  async getUser(@Body() body: RefreshTokenRequestDto) {
    return this._tokenService.refresh(body);
  }
}
