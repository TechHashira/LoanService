import { Injectable } from '@nestjs/common';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateSavingDto } from '../dtos/createSaving.dto';
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
}
