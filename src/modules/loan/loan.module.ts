import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanRepository } from './repositories/loan.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LoanRepository])],
})
export class LoanModule {}
