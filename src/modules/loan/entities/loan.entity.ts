import { UserEntity } from 'src/modules/user/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'loan' })
export class LoanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loanAmounth: number;

  @Column()
  interest: number;

  @Column()
  monthlyFee: number;

  @ManyToOne(() => UserEntity, (user) => user.loan)
  @JoinColumn()
  user: UserEntity;
}
