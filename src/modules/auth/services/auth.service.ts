import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private _userService: UserService,
    private _jwtService: JwtService,
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
    const payload = { sub: user.id };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
