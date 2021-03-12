import { Injectable } from '@nestjs/common';
import { QueryParamsDto } from 'src/common/dtos/queryOptions.dto';
import { AdminService } from 'src/modules/admin/services/admin.service';
import { CreatedFailedException } from 'src/modules/user/exceptions/createdFailed.exception';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateWorksheetDto } from '../dtos/createWorksheet.dto';
import { CreateWorksheetUserDto } from '../dtos/createWorksheetUser.dto';
import { WorksheetEntity } from '../entities/worksheet.entity';
import { WorkSheetUserEntity } from '../entities/worksheetUser.entity';
import { WorksheetNotFoundException } from '../exceptions/WorksheetNotFoundExceptio';
import { WorksheetRepository } from '../repositories/worksheet.repository';
import { WorksheetUserRepository } from '../repositories/worksheetUser.repository';

@Injectable()
export class WorksheetService {
  constructor(
    private _worksheetRepository: WorksheetRepository,
    private _adminService: AdminService,
    private _userService: UserService,
    private _worksheetUserRepository: WorksheetUserRepository,
  ) {}
  public async createWorksheet(createWorksheetDto: CreateWorksheetDto) {
    try {
      const { adminId } = createWorksheetDto;
      const admin = await this._adminService.findById(adminId);
      const worksheet = this._worksheetRepository.create({ admin });
      await this._worksheetRepository.save(worksheet);
      return worksheet;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }

  public async createWorkSheetUser(
    createWorksheetUserDto: CreateWorksheetUserDto,
  ) {
    try {
      const { worksheetId, userId } = createWorksheetUserDto;
      const worksheet = await this.findWorkSheetById(worksheetId);
      const user = await this._userService.findUserById(userId);

      const worksheetUser = this._worksheetUserRepository.create({
        worksheet,
        user,
      });

      await this._worksheetUserRepository.save(worksheetUser);

      return worksheetUser;
    } catch ({ message }) {
      throw new CreatedFailedException(message);
    }
  }

  public async findWorkSheetById(id: number): Promise<WorksheetEntity> {
    const queryBuilder = this._worksheetRepository.createQueryBuilder();

    try {
      const worksheet = await queryBuilder
        .select(['id', 'adminId'])
        .where('id = :id', { id })
        .execute();

      return worksheet;
    } catch (error) {
      throw new WorksheetNotFoundException();
    }
  }

  public async findWorkSheetUserById(id: number): Promise<WorkSheetUserEntity> {
    const queryBuilder = this._worksheetUserRepository.createQueryBuilder();

    try {
      const worksheetUser = await queryBuilder
        .select(['id', 'userId', 'worksheetId'])
        .where('id = :id', { id })
        .execute();

      return worksheetUser;
    } catch (error) {
      throw new WorksheetNotFoundException();
    }
  }

  public async getAllUsersByWorksheetId(
    id: number,
  ): Promise<Array<WorkSheetUserEntity>> {
    const queryBuilder = this._worksheetUserRepository.createQueryBuilder();
    try {
      const worksheetUsers = await queryBuilder
        .select(['id', 'userId', 'worksheetId'])
        .where('worksheetId = :id', { id })
        .execute();

      return worksheetUsers;
    } catch (error) {
      throw new WorksheetNotFoundException();
    }
  }

  public async getAllUsersOfWorksheetUser(
    queryParamsDto: QueryParamsDto,
  ): Promise<Array<WorkSheetUserEntity>> {
    const { take } = queryParamsDto;
    const queryBuilder = this._worksheetUserRepository.createQueryBuilder(
      'worksheet_user',
    );
    try {
      const worksheetUsers = await queryBuilder
        .select([
          'worksheet_user.id',
          'worksheet_user.userId',
          'worksheet_user.worksheetId',
        ])
        .take(take)
        .execute();

      return worksheetUsers;
    } catch (error) {
      throw new WorksheetNotFoundException();
    }
  }

  public async getAllWorksheet(
    queryParamsDto: QueryParamsDto,
  ): Promise<Array<WorksheetEntity>> {
    const { take } = queryParamsDto;
    const queryBuilder = this._worksheetRepository.createQueryBuilder();
    try {
      const worksheets = await queryBuilder
        .select(['id', 'adminId'])
        .take(take)
        .execute();

      return worksheets;
    } catch (error) {
      throw new WorksheetNotFoundException();
    }
  }
}
