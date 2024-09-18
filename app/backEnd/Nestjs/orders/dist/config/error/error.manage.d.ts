import { HttpStatus } from '@nestjs/common';
export declare class errorManage extends Error {
    constructor({ type, message, }: {
        type: keyof typeof HttpStatus;
        message: string;
    });
    static errorManageController(message: string): void;
}
