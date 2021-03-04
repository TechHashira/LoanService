import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from 'src/modules/user/exceptions/userNotFound.exception';
import { AdminRepository } from '../repositories/admin.repository';

@Injectable()
export class AdminService {
  constructor(private _adminRepository: AdminRepository) {}

  public async findByEmail(email: string) {
    const queryBuilder = this._adminRepository.createQueryBuilder(
      'admin_alias',
    );

    try {
      const user = await queryBuilder
        .where('admin_alias.email = :email', { email })
        .getOneOrFail();

      return user;
    } catch (error) {
      throw new UserNotFoundException();
    }
  }
}
