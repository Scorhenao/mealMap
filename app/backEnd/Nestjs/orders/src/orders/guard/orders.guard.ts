import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { Observable ,map} from 'rxjs';
import { errorManage } from 'src/config/error/error.manage';

@Injectable()
export class OrdersGuard implements CanActivate {
  constructor(private httpService:HttpService,private configService:ConfigService){}
  async canActivate(
    context: ExecutionContext,
  ) {
   try{
    console.log("entramos al que order guard");
    
    const req:Request=context.switchToHttp().getRequest();  
    console.log(req.headers);
    const data= await this.httpService.axiosRef.get("http://localhost:3000/verifyRole",{
      withCredentials:true,
      headers:{
        "X-Service":"order",
        "X-Access-Token":req.headers["x-access-token"],
        "X-Refresh-Token":req.headers["x-refresh-token"],
      }
    });
    
    if(!data){
      throw new errorManage({
        type:"UNAUTHORIZED",
        message:"You are not autoriced"
      });
    }
    return true;
   }catch(err:any){
    console.log("entramos al error");
    throw errorManage.errorManageController(err.message);
   }
  }
}
