import { UserEntity } from 'src/modules/user/entities';
export declare class LoanEntity {
    id: number;
    loanAmounth: number;
    interest: number;
    user: UserEntity;
}
