import { EntityRepository, Repository } from 'typeorm';
import { WorkSheetUserEntity } from '../entities/worksheetUser.entity';

@EntityRepository(WorkSheetUserEntity)
export class WorksheetUserRepository extends Repository<WorkSheetUserEntity> {}
