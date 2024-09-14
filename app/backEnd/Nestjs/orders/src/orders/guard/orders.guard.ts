import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { errorManage } from 'src/config/error/error.manage';

@Injectable()
export class OrdersGuard implements CanActivate {
  constructor(private httpService:HttpService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   try{
    const req:Request=context.switchToHttp().getRequest();
    //const res:Response=context.switchToHttp().getResponse();
    const data= this.httpService.post("http://localhost:3000/verifyToken",req);
    if(!data){
      throw new errorManage({
        type:"UNAUTHORIZED",
        message:"You are not autoriced"
      });
    }
    return true;
   }catch(err:any){
    throw errorManage.errorManageController(err.message);
   }
  }
}
