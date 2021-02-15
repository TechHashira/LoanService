import { UserEntity } from 'src/modules/user/entities';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class UserSavingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dividendsEarned: number;

  @Column()
  monthlySavingRate: number;

  @ManyToOne(() => UserEntity, (user) => user.userSavingEntity)
  user: UserEntity;
}
