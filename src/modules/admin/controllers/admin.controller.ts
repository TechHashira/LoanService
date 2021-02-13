import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller('loanService/v1/admin')
export class AdminController {
  @Get('searchUser/:id')
  searchUsers(@Param() params: any): string {
    return 'HelloWorld';
  }
}
