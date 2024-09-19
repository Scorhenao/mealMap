import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class ErrsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const req:Request=host.switchToHttp().getRequest();
    const res:Response=host.switchToHttp().getResponse();
    let status=exception.getStatus() ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message= exception.message ? exception.message : "The server have a problem come more last please";

    console.log("llegamos a la exception");
    
    
    if(exception instanceof HttpException){
      console.log("entramos a la exception http");
      const err= exception.message.split(" :: ");
      //console.log(HttpStatus[err[0]]);
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
      
      const err= exception.message.split(" :: ");
      if(err){
        console.log("entramos a la exception mela");
        console.log(exception);
        
        res.status(404).json({
          status: 404,
          timeStamp: new Date().toISOString(),
          path: req.url,
          method: req.method,
          message: err[1],
        });
      }else{
        console.log("entrmao a la exception fea");
        
        res.status(404).json({
          status: 404,
          timeStamp: new Date().toISOString(),
          path: req.url,
          method: req.method,
          message: exception.message,
        });
      }
    }
  }
}
