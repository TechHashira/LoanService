import { EntityRepository, Repository } from 'typeorm';
import { WorkSheetUserEntity } from '../entities/worksheetUser.entity';

@EntityRepository()
export class WorksheetUserRepository extends Repository<WorkSheetUserEntity> {}
