import { BadRequestException } from '@nestjs/common';
export declare class CreatedFailedException extends BadRequestException {
    constructor(error?: string);
}
