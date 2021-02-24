import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { CreatedFailedException } from '../exceptions/createdFailed.exception';
import { UserNotFoundException } from '../exceptions/userNotFound.exception';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private _userRepository: UserRepository,
    @Inject(forwardRef(() => AuthService))
    private _authService: AuthService,
  ) {}

  public async createUser(userRegisterDto: UserRegisterDto) {
    const userHashed = await this._authService.hashPassword(userRegisterDto);

    try {
      const user = this._userRepository.create(userHashed);
      await this._userRepository.save(user);

      return user;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }

  public async findOne(email: string) {
    const queryBuilder = this._userRepository.createQueryBuilder('user_alias');

    try {
      const user = await queryBuilder
        .where('user_alias.email = :email', { email })
        .getOneOrFail();

      return user;
    } catch (error) {
      throw new UserNotFoundException();
    }
  }

  public async findUserById(userId: number) {
    const queryBuilder = this._userRepository.createQueryBuilder('user_alias');

    return await queryBuilder
      .where('user_alias.id = :userId', { userId })
      .getOne();
  }
}
