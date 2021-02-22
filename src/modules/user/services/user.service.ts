import { Injectable } from '@nestjs/common';
import { UserRegisterDto } from 'src/modules/admin/dtos/registerUser.dto';
import { CreatedFailedException } from '../exceptions/createdFailed.exception';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async createUser(userRegisterDto: UserRegisterDto) {
    try {
      const user = this._userRepository.create(userRegisterDto);
      await this._userRepository.save(user);

      return user;
    } catch (error) {
      throw new CreatedFailedException(error);
    }
  }

  public async findOne(email: string) {
    const queryBuilder = this._userRepository.createQueryBuilder('user_alias');

    return await queryBuilder
      .where('user_alias.email = :email', { email })
      .getOne();
  }

  public async findUserById(userId: number) {
    const queryBuilder = this._userRepository.createQueryBuilder('user_alias');

    return await queryBuilder
      .where('user_alias.id = :userId', { userId })
      .getOne();
  }
}
