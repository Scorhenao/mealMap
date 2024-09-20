import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class ConfirmOrderInterceptor implements NestInterceptor {
  constructor(
    private httpService:HttpService,
    private configService:ConfigService
  ){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req=context.switchToHttp().getRequest();
    const res:Response=context.switchToHttp().getResponse();
    let conteo=0;
    let ingredientsName=[{name:"null",quantity:0}];

    return next.handle().
    pipe(
      map(async()=>{
        console.log("entramos al interceptor");
        console.log(res.statusCode);
        
        if(res.statusCode==200){
          console.log("HOLA");
          console.log(req.body.dishes);
          
        for(const ingredient of req.body.dishes){
          for(const uno of ingredient.ingredients){
              for(const num in ingredientsName){
                if(uno.name !== ingredientsName[num].name){           
                  ingredientsName.push({
                    name:uno.name,
                    quantity:1
                  });
                }else{
                  console.log("ingredient array vale");
                  console.log(ingredientsName);
                  
                  ingredientsName[num].quantity=+1;
                }
              }
            }
        }

        console.log(ingredientsName);
        
        return true;
          // const Order=await this.httpService.axiosRef.post("http://locahost:3000/notifyOrder",req.body,{
          //   withCredentials:true,
          //   headers:{
          //     "x-api-key":this.configService.get<string>("API_KEY"),
          //   }
          // });
      }}
    ))
  
  }
}
