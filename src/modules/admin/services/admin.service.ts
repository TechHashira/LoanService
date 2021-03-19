import { Injectable } from '@nestjs/common';
import { EmailOrPasswordWrong } from 'src/modules/auth/exceptions/EmailOrPasswordWrong.exception';
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
    } catch ({ message }) {
      throw new UserNotFoundException(message);
    }
  }
  public async findByEmailAuth(email: string) {
    const queryBuilder = this._adminRepository.createQueryBuilder(
      'admin_alias',
    );

    try {
      const user = await queryBuilder
        .where('admin_alias.email = :email', { email })
        .getOneOrFail();

      return user;
    } catch ({ message }) {
      throw new EmailOrPasswordWrong('Email or password Wrong :)');
    }
  }

  public async findById(id: number) {
    const queryBuilder = this._adminRepository.createQueryBuilder(
      'admin_alias',
    );

    try {
      const admin = await queryBuilder
        .where('admin_alias.id = :id', { id })
        .getOneOrFail();

      return admin;
    } catch (error) {
      throw new UserNotFoundException('User noy exist');
    }
  }
}
