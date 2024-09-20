import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const req:Request=host.switchToHttp().getRequest();

    const res:Response=host.switchToHttp().getResponse();
    const customHttp:any=HttpStatus[exception.message.split(" :: ")[0]];
    
    const status= exception.getStatus || HttpStatus[exception.message.split(" :: ")[0]] ?  customHttp || HttpStatus.BAD_REQUEST : HttpStatus.INTERNAL_SERVER_ERROR;

    let message =exception.response || exception.message.split(" :: ") ? exception.response.error  || exception.response ||exception.message.split(" :: ")[1] || exception.message :
    'There was an error processing your request. Please try again later.';


    console.log("llegamos a la exception");
    
    
    if(exception instanceof HttpException){
      console.log(exception);
      console.log(status);
      console.log(message);
      
      
      res.status(status).json({
        status: status,
        timeStamp: new Date().toISOString(),
        path: req.url,
        method: req.method,
        message: message,
      });

    }else{ 
        res.status(status).json({
          status: status,
          timeStamp: new Date().toISOString(),
          path: req.url,
          method: req.method,
          message: message,
        });
    }
  }
}
