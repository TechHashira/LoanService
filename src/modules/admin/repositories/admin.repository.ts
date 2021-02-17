import { EntityRepository, Repository } from 'typeorm';
import { AdminEntity } from '../entities/admin.entity';

@EntityRepository()
export class AdminRepository extends Repository<AdminEntity> {}
