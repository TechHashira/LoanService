import { Injectable } from '@nestjs/common';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { UserNotFoundException } from 'src/modules/user/exceptions/userNotFound.exception';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateSavingDto } from '../dtos/createSaving.dto';
import { UserSavingEntity } from '../entities/user-saving.entity';
import { UserSavingRepository } from '../repositories/userSaving.repository';

@Injectable()
export class UserSavingService {
  constructor(
    private _userSavingRepository: UserSavingRepository,
    private _userService: UserService,
  ) {}

  public async createSaving(createSavingDto: CreateSavingDto) {
    try {
      const { userId, ...auxCreateSavingDto } = { ...createSavingDto };
      const user = await this._userService.findUserById(userId);
      const saving = this._userSavingRepository.create({
        ...auxCreateSavingDto,
        user,
      });
      await this._userSavingRepository.save(saving);
      return saving;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }
  public async getAllSavings(
    queryParamsDto: QueryParamsDto,
  ): Promise<Array<UserSavingEntity>> {
    const { take } = queryParamsDto;
    const queryBuilder = this._userSavingRepository.createQueryBuilder(
      'saving_alias',
    );
    const savings = queryBuilder.take(take).getMany();

    return savings;
  }

  public async getUserSavingById(
    userSavingId: number,
  ): Promise<UserSavingEntity> {
    const queryBuilder = this._userSavingRepository.createQueryBuilder(
      'saving_alias',
    );
    return await queryBuilder
      .where('saving_alias.id = :userSavingId', { userSavingId })
      .getOne();
  }

  public async getAllSavingsByUserId(
    id: number,
  ): Promise<Array<UserSavingEntity>> {
    const queryBuilder = this._userSavingRepository.createQueryBuilder(
      'saving_alias',
    );
    try {
      const savings = await queryBuilder
        .where('saving_alias.userId = :id', { id })
        .getMany();

      return savings;
    } catch ({ message }) {
      throw new UserNotFoundException(message);
    }
  }
}
