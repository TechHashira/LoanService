import { UnauthorizedException } from '@nestjs/common';

export class EmailOrPasswordWrong extends UnauthorizedException {}
