import { RoleType } from 'src/common/constants';
export declare class UserRegisterDto {
    readonly role?: RoleType;
    readonly fullname: string;
    readonly telephone: string;
}
