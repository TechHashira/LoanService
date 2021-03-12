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
      const { userId, monthlySavingRate } = createSavingDto;
      const user = await this._userService.findUserById(userId);
      const saving = this._userSavingRepository.create({
        monthlySavingRate,
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
    const queryBuilder = this._userSavingRepository.createQueryBuilder();
    const savings = await queryBuilder.take(take).getMany();

    return savings;
  }

  public async getUserSavingById(
    userSavingId: number,
  ): Promise<UserSavingEntity> {
    const queryBuilder = this._userSavingRepository.createQueryBuilder();
    return await queryBuilder
      .select('*')
      .where('id = :userSavingId', { userSavingId })
      .execute();
  }

  public async getAllSavingsByUserId(
    id: number,
  ): Promise<Array<UserSavingEntity>> {
    const queryBuilder = this._userSavingRepository.createQueryBuilder();
    try {
      const savings = await queryBuilder
        .select('*')
        .where('userId = :id', { id })
        .execute();

      return savings;
    } catch ({ message }) {
      throw new UserNotFoundException(message);
    }
  }
}
