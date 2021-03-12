import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class IndexController {
  @Get('/')
  redirectToDocumentation(@Res() res: Response) {
    return res.redirect('https://loanservice-api.herokuapp.com/api/');
  }
}
