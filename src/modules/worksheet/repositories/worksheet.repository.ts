import { EntityRepository, Repository } from 'typeorm';
import { WorksheetEntity } from '../entities/worksheet.entity';

@EntityRepository()
export class Worksheet extends Repository<WorksheetEntity> {}
