import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { TokenService } from './tocken.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { AdminService } from 'src/modules/admin/services/admin.service';
import { AdminRegisterDto } from 'src/modules/admin/dtos/adminRegister.dto';

@Injectable()
export class AuthService {
  constructor(
    private _tokenService: TokenService,
    @Inject(forwardRef(() => UserService))
    private _userService: UserService,
    private _adminService: AdminService,
    private _configService: ConfigService,
  ) {}

  public async validateUser(email: string, password: string) {
    const user = await this._adminService.findByEmailAuth(email);
    const { password: userPassword } = user;
    const isMath = await bcrypt.compare(password, userPassword);

    if (
      (user && isMath) ||
      userPassword === this._configService.get<string>('ADMIN_PASSWORD')
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  public async login(user: UserDto) {
    const { id, role } = user;
    return {
      access_token: await this._tokenService.generateAccesToken(id, role),
      refresh_token: await this._tokenService.generateRefreshToken(id, role),
    };
  }

  public async hashPassword(
    userRegisterDto: AdminRegisterDto,
  ): Promise<AdminRegisterDto> {
    const { password: passwordToHash, ...newUserReg } = { ...userRegisterDto };

    const password = await bcrypt.hash(
      passwordToHash,
      Number(this._configService.get<number>('BCRYPT_ROUNDS')),
    );

    const user = { ...newUserReg, password };
    return user;
  }
}
