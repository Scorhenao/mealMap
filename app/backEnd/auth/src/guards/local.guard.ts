import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class localGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log("entrmaos al guadria local");
        
        const request:Request=context.switchToHttp().getRequest();
        const tokenRefresh=request.signedCookies;

        console.log(tokenRefresh);
        

        return true;

    }
}