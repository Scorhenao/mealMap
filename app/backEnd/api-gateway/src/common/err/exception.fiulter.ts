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
    
    const status =
      exception.status || HttpStatus[exception.message.split(' :: ')[0]]
        ? exception.status ||
          exception.message.split(' :: ')[0] ||
          HttpStatus.BAD_REQUEST
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message =
      exception.response || exception.message.split(' :: ')
        ? exception.response ||
          exception.message.split(' :: ')[1] ||
          exception.message
        : 'There was an error processing your request. Please try again later.';

    console.log(status);
    console.log(message);

    if (exception instanceof HttpException) {
      console.log('entrmaos a http');

      response.status(status).json({
        status: status,
        timeStamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
        message: message,
      });
    } else {
      console.log('entramos a custom');

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
