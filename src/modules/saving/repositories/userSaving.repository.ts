import { EntityRepository, Repository } from 'typeorm';
import { UserSavingEntity } from '../entities/user-saving.entity';

@EntityRepository(UserSavingEntity)
export class UserSavingRepository extends Repository<UserSavingEntity> {}
