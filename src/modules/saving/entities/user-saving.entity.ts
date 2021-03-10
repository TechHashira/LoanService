import { UserEntity } from 'src/modules/user/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user_saving' })
export class UserSavingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  dividendsEarned: number;

  @Column()
  monthlySavingRate: number;

  @ManyToOne(() => UserEntity, (user) => user.userSaving)
  @JoinColumn()
  user: UserEntity;
}
