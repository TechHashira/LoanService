import { RoleType } from 'src/common/constants';
import { Column } from 'typeorm';

export class UserDto {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telephone: string;

  @Column({ type: 'enum', enum: RoleType })
  role: RoleType;
}
