import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import path from 'path';

@Catch()
export class HttpExceptioManage implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message =exception.message ? exception.message :
      'There was an error processing your request. Please try again later.';

    if (exception instanceof HttpException) {
      console.log("entramos a la exception de htpp");
      response.status(status).json({
        status: status,
        timeStamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message: exception.message,
      });
    } else {
      const err=exception.message.split(" :: ");
      if(err){
        response.status(status).json({
          status: err[0],
          timeStamp: new Date().toISOString(),
          method: request.method,
          path: request.url,
          message: err[1],
        });
      }else{      
        response.status(status).json({
          status: status,
          timeStamp: new Date().toISOString(),
          method: request.method,
          path: request.url,
          message: message,
        });
      }
      
     
    }
  }
}
