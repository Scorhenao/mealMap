import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class allManageErrors implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
