import { Exclude } from 'class-transformer';
import { RoleType } from 'src/common/constants';
import { LoanEntity } from 'src/modules/loan/entities/loan.entity';
import { UserSavingEntity } from 'src/modules/saving/entities/user-saving.entity';
import { WorkSheetUserEntity } from 'src/modules/worksheet/entities/worksheetUser.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'user' })
@Unique(['email'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER_A })
  role: RoleType;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  telephone: string;

  @OneToMany(() => UserSavingEntity, (userSaving) => userSaving.user)
  userSaving: UserSavingEntity[];

  @OneToMany(() => LoanEntity, (loan) => loan.user)
  loan: LoanEntity[];

  @OneToMany(() => WorkSheetUserEntity, (workshetUser) => workshetUser.user)
  workshetUser: WorkSheetUserEntity[];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
