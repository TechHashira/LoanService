import { RoleType } from 'src/common/constants';
import { UserSavingEntity } from 'src/modules/Saving/entities/user-saving.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @OneToMany(
    () => UserSavingEntity,
    (userSavingEntity) => userSavingEntity.user,
  )
  userSavingEntity: UserSavingEntity[];
}
