export interface IRefreshToken {
  is_revoked: boolean;
  sub: number;
  exp: number;
}
