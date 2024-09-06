import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request,Response } from "express";

@Catch()
export class HttpExceptioManage implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status= HttpStatus.INTERNAL_SERVER_ERROR;
        let message="There was an error processing your request. Please try again later."

        if(exception instanceof HttpException){
             status= exception.getStatus();
            response.status(status).json({
                status:status,
                timeStamp:new Date().toISOString(),
                path:request.url,
                message:exception.message
            })
        }else{
            response.status(status).json({
                status:status,
                timeStamp:new Date().toISOString(),
                message:message
            });
        }
    }
}