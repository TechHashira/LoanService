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

  @ManyToOne(() => UserEntity, (user) => user.loan)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  userId: number;
}
