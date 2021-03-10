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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const queryOptions_dto_1 = require("../../../common/dtos/queryOptions.dto");
const createdFailed_exception_1 = require("../../user/exceptions/createdFailed.exception");
const userNotFound_exception_1 = require("../../user/exceptions/userNotFound.exception");
const user_service_1 = require("../../user/services/user.service");
const loan_repository_1 = require("../repositories/loan.repository");
let LoanService = class LoanService {
    constructor(_loanRepository, _userService) {
        this._loanRepository = _loanRepository;
        this._userService = _userService;
    }
    async createLoan(createLoanDto) {
        try {
            const _a = Object.assign({}, createLoanDto), { userId } = _a, auxCreateLoanDto = __rest(_a, ["userId"]);
            const user = await this._userService.findUserById(userId);
            const loan = this._loanRepository.create(Object.assign(Object.assign({}, auxCreateLoanDto), { user }));
            await this._loanRepository.save(loan);
            return loan;
        }
        catch ({ message }) {
            throw new createdFailed_exception_1.CreatedFailedException(message);
        }
    }
    async getAllLoans(queryParamsDto) {
        const { take } = queryParamsDto;
        const queryBuilder = this._loanRepository.createQueryBuilder('loan_alias');
        const loans = queryBuilder.take(take).getMany();
        return loans;
    }
    async getLoanById(loanId) {
        const queryBuilder = this._loanRepository.createQueryBuilder('loan_alias');
        return await queryBuilder
            .where('loan_alias.id = :loanId', { loanId })
            .getOne();
    }
    async getAllLoansByUserId(id) {
        const queryBuilder = this._loanRepository.createQueryBuilder('loan_alias');
        try {
            const loans = await queryBuilder
                .where('loan_alias.userId = :id', { id })
                .getMany();
            return loans;
        }
        catch ({ message }) {
            throw new userNotFound_exception_1.UserNotFoundException(message);
        }
    }
};
LoanService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [loan_repository_1.LoanRepository,
        user_service_1.UserService])
], LoanService);
exports.LoanService = LoanService;
//# sourceMappingURL=loan.service.js.map