import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class roleGuard implements CanActivate {
  constructor(private httpService:HttpService){}
  async canActivate(
    context: ExecutionContext){
      console.log("estamos en el roleGuard");
      
    const request:Request=context.switchToHttp().getRequest();
    const nameService=request.headers["x-service"];
    const roleCurrent:any=request.user;
    console.log(roleCurrent);
    
    const callService=await this.httpService.axiosRef.get(`http://localhost:3000/permission/${nameService}/${roleCurrent.role}`);

    return true;
  }
}
