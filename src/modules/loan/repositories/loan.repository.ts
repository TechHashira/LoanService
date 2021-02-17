import { EntityRepository, Repository } from 'typeorm';
import { LoanEntity } from '../entities/loan.entity';

@EntityRepository()
export class LoanRepository extends Repository<LoanEntity> {}
