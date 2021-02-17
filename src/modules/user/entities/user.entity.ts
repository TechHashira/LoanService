import { RoleType } from 'src/common/constants';
import { LoanEntity } from 'src/modules/loan/entities/loan.entity';
import { UserSavingEntity } from 'src/modules/saving/entities/user-saving.entity';
import { WorkSheetUserEntity } from 'src/modules/worksheet/entities/worksheetUser.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER_A })
  role: RoleType;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @OneToMany(() => UserSavingEntity, (userSaving) => userSaving.user)
  userSaving: UserSavingEntity[];

  @OneToMany(() => LoanEntity, (loan) => loan.user)
  loan: LoanEntity[];

  @OneToMany(() => WorkSheetUserEntity, (workshetUser) => workshetUser.user)
  workshetUser: WorkSheetUserEntity[];
}
