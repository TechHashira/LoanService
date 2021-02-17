import { EntityRepository, Repository } from 'typeorm';
import { UserSavingEntity } from '../entities/user-saving.entity';

@EntityRepository()
export class UserSavingRepository extends Repository<UserSavingEntity> {}
