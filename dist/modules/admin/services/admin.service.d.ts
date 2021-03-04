import { AdminRepository } from '../repositories/admin.repository';
export declare class AdminService {
    private _adminRepository;
    constructor(_adminRepository: AdminRepository);
    findByEmail(email: string): Promise<import("../entities/admin.entity").AdminEntity>;
}
