import { RoleType } from 'src/common/constants';

export interface IRefreshToken {
  is_revoked: boolean;
  sub: number;
  exp: number;
  role: RoleType;
}
