import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

@Injectable()
export class apiKeyGuard implements CanActivate {
  constructor(private httpService:HttpService,private configService:ConfigService){}
  async canActivate(
    context: ExecutionContext,
  ) {  
    const req:Request=context.switchToHttp().getRequest(); 
     console.log('entra');
     
    if(!req.headers["x-api-key"] || req.headers["x-api-key"] !== this.configService.get<string>("API_KEY") ) {     
        throw new UnauthorizedException();
    } 
    
    return true;
  }
}
