import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities';

@EntityRepository()
export class UserRepository extends Repository<UserEntity> {}
