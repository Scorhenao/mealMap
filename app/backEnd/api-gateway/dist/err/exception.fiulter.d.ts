import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class HttpExceptioManage implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
