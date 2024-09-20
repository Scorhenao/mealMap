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
  export class HttpFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      console.log(exception);
      

      const customHttp:any=HttpStatus[exception.message.split(" :: ")[0]];
      const status= exception.getStatus || HttpStatus[exception.message.split(" :: ")[0]] ?  customHttp || HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR;
      
      let message =exception.response || exception.message.split(" :: ") ? exception.response || exception.message.split(" :: ")[1] || exception.message :
        'There was an error processing your request. Please try again later.';
  
      if (exception instanceof HttpException) {
        console.log("entry to http");
        console.log(status);
        console.log(message);
        
        response.status(status).json({
          status: status,
          timeStamp: new Date().toISOString(),
          path: request.url,
          method: request.method,
          message:message,
        });
      } else {           
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