import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Request, Response } from 'express';
import { Observable ,map} from 'rxjs';
import { errorManage } from 'src/config/error/error.manage';
import { KEY_VALUE } from '../decorators/decorators.decorator';

@Injectable()
export class OrdersGuard implements CanActivate {
  constructor(private httpService:HttpService,private configService:ConfigService,
    private reflector:Reflector
  ){}
  async canActivate(
    context: ExecutionContext,
  ) {
   try{
    console.log("entramos al que order guard");
    const role= this.reflector.get(KEY_VALUE,context.getHandler());
    
    const req:any=context.switchToHttp().getRequest();
    
    if(!role.includes(req.body.role)){
      throw new errorManage({
        type:"UNAUTHORIZED",
        message:"The user have a rol not autorized"
      });
    }
    console.log("paso relajado");
    
    return true;
   }catch(err:any){
    console.log("se envia algo malo");
    
    throw errorManage.errorManageController(err.message);
   }
  }
}
