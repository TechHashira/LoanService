import { EntityRepository, Repository } from 'typeorm';
import { WorksheetEntity } from '../entities/worksheet.entity';

@EntityRepository(WorksheetEntity)
export class Worksheet extends Repository<WorksheetEntity> {}
