import { Injectable } from '@nestjs/common';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { CreateSavingDto } from '../dtos/createSaving.dto';
import { UserSavingRepository } from '../repositories/userSaving.repository';

@Injectable()
export class UserSavingService {
  constructor(private _userSavingRepository: UserSavingRepository) {}

  public async createSaving(userId: number, monthlyRate: number) {
    const userSaving = new CreateSavingDto(userId, monthlyRate);

    try {
      const saving = this._userSavingRepository.create(userSaving);
      await this._userSavingRepository.save(saving);
      return saving;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }
}
