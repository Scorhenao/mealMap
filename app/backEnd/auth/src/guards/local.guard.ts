import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Request } from "express";
import { errorManage } from "src/common/error/error.Manage";

@Injectable()
export class localGuard implements CanActivate{
    constructor(private jwtService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try{
            const request=context.switchToHttp().getRequest();
            const tokenAccess=request.headers.autorization;
            const refreshToken=request.headers.refreshToken;
            
            if(!this.jwtService.verify(tokenAccess) || !this.jwtService.verify(refreshToken)){
                request.validationToken=true;
            }
            request.validationToken=false;
            return true;
        }catch(err:any){
            throw errorManage.errorMethod(err.message);
        }
    }
}