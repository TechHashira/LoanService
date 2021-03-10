"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const queryOptions_dto_1 = require("../../../common/dtos/queryOptions.dto");
const registerUser_dto_1 = require("../../admin/dtos/registerUser.dto");
const auth_service_1 = require("../../auth/services/auth.service");
const createdFailed_exception_1 = require("../exceptions/createdFailed.exception");
const userNotFound_exception_1 = require("../exceptions/userNotFound.exception");
const user_repository_1 = require("../repositories/user.repository");
let UserService = class UserService {
    constructor(_userRepository, _authService) {
        this._userRepository = _userRepository;
        this._authService = _authService;
    }
    async createUser(userRegisterDto) {
        try {
            const user = this._userRepository.create(userRegisterDto);
            await this._userRepository.save(user);
            return user;
        }
        catch ({ message }) {
            throw new createdFailed_exception_1.CreatedFailedException(message);
        }
    }
    async findUserByEmail(email) {
        const queryBuilder = this._userRepository.createQueryBuilder('user_alias');
        try {
            const user = await queryBuilder
                .where('user_alias.email = :email', { email })
                .getOneOrFail();
            return user;
        }
        catch (error) {
            throw new userNotFound_exception_1.UserNotFoundException();
        }
    }
    async findUserById(userId) {
        const queryBuilder = this._userRepository.createQueryBuilder('user_alias');
        return await queryBuilder
            .where('user_alias.id = :userId', { userId })
            .getOne();
    }
    async findAllUsers(queryParamsDto) {
        const { take } = queryParamsDto;
        const queryBuilder = this._userRepository.createQueryBuilder('user_alias');
        const users = await queryBuilder.take(take).getMany();
        return users;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(common_1.forwardRef(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        auth_service_1.AuthService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map