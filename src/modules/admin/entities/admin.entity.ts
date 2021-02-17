import { UserEntity } from 'src/modules/user/entities';
import { WorksheetEntity } from 'src/modules/worksheet/entities/worksheet.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'admin' })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => WorksheetEntity, (worksheet) => worksheet.admin)
  worksheet: WorksheetEntity[];
}
