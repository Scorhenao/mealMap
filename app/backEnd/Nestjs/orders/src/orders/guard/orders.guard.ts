import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable ,map} from 'rxjs/operators';
import { errorManage } from 'src/config/error/error.manage';

@Injectable()
export class OrdersGuard implements CanActivate {
  constructor(private httpService:HttpService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
   try{
    const req:Request=context.switchToHttp().getRequest();
    const roles={uno:"client",dos:"admin"}
    const data= this.httpService.post("http://localhost:3000/verifyRole",roles)
    .pipe(map(response=>response.data));
    console.log("los roles son ");
    console.log(data);
    
    
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
