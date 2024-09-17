import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const req:Request=host.switchToHttp().getRequest();
    const res:Response=host.switchToHttp().getResponse();
    const status=HttpStatus.INTERNAL_SERVER_ERROR;
    const message= exception.message ? exception.message : "The server have a problem come more last please";

    
    if(exception instanceof HttpException){
      res.status(status).json({
        status: status,
        timeStamp: new Date().toISOString(),
        path: req.url,
        method: req.method,
        message: exception.message,
      });
    }else{
      
      const err= exception.message.split(" :: ");
      if(err){
        console.log("entramos a la exception");
        res.status(status).json({
          status: err[0],
          timeStamp: new Date().toISOString(),
          path: req.url,
          method: req.method,
          message: err[1],
        });
      }else{
        res.status(status).json({
          status: status,
          timeStamp: new Date().toISOString(),
          path: req.url,
          method: req.method,
          message: exception.message,
        });
      }
    }
  }
}
