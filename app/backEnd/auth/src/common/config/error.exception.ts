import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request,Response } from "express";

@Catch()
export class HttpFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx=host.switchToHttp();
        const response:Response=ctx.getResponse();
        const request:Request=ctx.getRequest()
        let status=exception.getStatus() ? exception.getStatus():HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception.message ? exception.message : "There is a internal server Error";
        
        if(exception instanceof HttpException){
            response.status(status).json({
                status:status,
                path:request.url,
                timestamp:new Date().toISOString(),
                method:request.method,
                message:message
            });
        }else{
            response.status(status).json({
                status:status,
                path:request.url,
                timestamp:new Date().toISOString(),
                method:request.method,
                message:message
            });
        }

    }
}