import { HttpStatus } from "@nestjs/common";
export declare class errorManage extends Error {
    constructor({ message, type }: {
        type: keyof typeof HttpStatus;
        message: string;
    });
    static errorMethod(message: string): void;
}
