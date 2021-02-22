import { RoleType } from 'src/common/constants';

export class UserDto {
  id: number;

  name: string;

  email: string;

  password: string;

  telephone: string;

  role: RoleType;
}
