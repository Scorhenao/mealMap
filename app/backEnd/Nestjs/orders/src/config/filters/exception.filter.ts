import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class allManageErrors implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus()
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    let message =exception.message ? exception.message :
      'There was an error processing your request. Please try again later.';

    if (exception instanceof HttpException) {
      console.log("enviamos la exception");
      
      response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        method: request.method,
        path: request.url,
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
