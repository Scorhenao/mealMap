import { CanActivate, ExecutionContext, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { KEY_VALUE } from '../decorator/decorator.decorator';
import { erroManage } from '../config/err/err.manage';

@Injectable()
export class roleGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request=context.switchToHttp().getRequest();

    const roles=this.reflector.get(KEY_VALUE,context.getHandler());
    const roleRequest= request.headers["x-role"];

    if(!roles.includes(roleRequest)){
      throw new erroManage({
        type:"UNAUTHORIZED",
        message:"The user is Unauthorized"
      });
    }
    return true;
  }
}
