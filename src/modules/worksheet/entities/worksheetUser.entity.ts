import { UserEntity } from 'src/modules/user/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WorksheetEntity } from './worksheet.entity';

@Entity({ name: 'worksheet_user' })
export class WorkSheetUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.workshetUser)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column()
  userdId: number;

  @ManyToOne(() => WorksheetEntity, (worksheet) => worksheet.worksheetUser)
  @JoinColumn({ name: 'worksheetId' })
  worksheet: WorksheetEntity;

  @Column()
  worksheetId: number;
}
