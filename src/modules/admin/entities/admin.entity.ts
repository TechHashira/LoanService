import { Exclude } from 'class-transformer';
import { RoleType } from 'src/common/constants/role-type.constants';
import { UserEntity } from 'src/modules/user/entities';
import { WorksheetEntity } from 'src/modules/worksheet/entities/worksheet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admin' })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.ADMIN })
  role: RoleType;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => WorksheetEntity, (worksheet) => worksheet.admin)
  worksheet: WorksheetEntity[];

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
