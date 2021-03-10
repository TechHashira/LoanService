import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { UserSavingService } from 'src/modules/saving/services/userSaving.service';
import { CreatedFailedException } from '../exceptions/createdFailed.exception';
import { UserNotFoundException } from '../exceptions/userNotFound.exception';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private _userRepository: UserRepository,
    @Inject(forwardRef(() => AuthService))
    private _authService: AuthService,
    private _userSavingService: UserSavingService,
  ) {}

  public async createUser(userRegisterDto: UserRegisterDto) {
    try {
      const user = this._userRepository.create(userRegisterDto);
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
