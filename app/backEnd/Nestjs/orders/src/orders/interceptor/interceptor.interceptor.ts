import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map, Observable } from 'rxjs';

@Injectable()
export class ConfirmOrderInterceptor implements NestInterceptor {
  constructor(
    private httpService:HttpService,
    private configService:ConfigService
  ){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req=context.switchToHttp().getRequest();
    const res=context.switchToHttp().getResponse();
    console.log("entramos al interceptor");
    
   if(res.status==200){
    return next.handle().
    pipe(
      map(async()=>{
          const Order=await this.httpService.axiosRef.post("http://locahost:3000/notifyOrder",req.body,{
            withCredentials:true,
            headers:{
              "x-api-key":this.configService.get<string>("API_KEY"),
            }
          });
      }
    ))
   }
   return next.handle();
  }
}
