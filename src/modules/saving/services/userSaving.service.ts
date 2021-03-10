import { Injectable } from '@nestjs/common';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { CreateSavingDto } from '../dtos/createSaving.dto';
import { UserSavingRepository } from '../repositories/userSaving.repository';

@Injectable()
export class UserSavingService {
  constructor(private _userSavingRepository: UserSavingRepository) {}

  public async createSaving(createSavingDto: CreateSavingDto) {
    try {
      const saving = this._userSavingRepository.create(createSavingDto);
      await this._userSavingRepository.save(saving);
      return saving;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }
}
