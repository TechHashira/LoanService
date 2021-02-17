import { UserEntity } from 'src/modules/user/entities';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WorksheetEntity } from './worksheet.entity';

@Entity({ name: 'worksheet_user' })
export class WorkSheetUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.workshetUser)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => WorksheetEntity, (worksheet) => worksheet.worksheetUser)
  @JoinColumn()
  worksheet: WorksheetEntity;
}
