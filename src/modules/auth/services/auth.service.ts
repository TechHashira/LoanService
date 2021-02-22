import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { TokenService } from './tocken.service';

@Injectable()
export class AuthService {
  constructor(
    private _tokenService: TokenService,
    private _userService: UserService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this._userService.findOne(email);

    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: UserDto) {
    const { id } = user;
    return {
      access_token: await this._tokenService.generateAccesToken(id),
      refresh_token: await this._tokenService.generateRefreshToken(id),
    };
  }
}
