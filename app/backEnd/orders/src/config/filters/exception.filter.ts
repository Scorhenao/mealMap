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
export class allManageErrors implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    
    const customHttp:number=exception.message.split(" :: ")[0];  
    const status=  HttpStatus[exception.message.split(" :: ")[0]] || exception.status ? exception.status || customHttp : HttpStatus.INTERNAL_SERVER_ERROR;

    let message =exception.response || exception.message.split(" :: ")[1] ? exception.message || exception.response || exception.message.split(" :: ")[1] :
    'There was an error processing your request. Please try again later.';

    
    if (exception instanceof HttpException) { 
      console.log("the status is");
      console.log(status);
      
      response.status(status).json({
        status: status,
        timeStamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message: message,
      });
    } 
    else {      
      console.log("entrmaos a la personalizada");
                     
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
