import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRepository } from './repositories/loan.repository';
import { LoanService } from './services/loan.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoanRepository])],
  exports: [LoanService],
  providers: [LoanService],
})
export class LoanModule {}
