import { AdminEntity } from 'src/modules/admin/entities/admin.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WorkSheetUserEntity } from './worksheetUser.entity';

@Entity({ name: 'worksheet' })
export class WorksheetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AdminEntity, (admin) => admin.worksheet)
  @JoinColumn({ name: 'adminId' })
  admin: AdminEntity;

  @Column()
  adminId: number;
  @OneToMany(
    () => WorkSheetUserEntity,
    (worksheetUser) => worksheetUser.worksheet,
  )
  worksheetUser: WorkSheetUserEntity[];
}
