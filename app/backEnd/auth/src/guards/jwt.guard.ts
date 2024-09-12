import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { Observable } from "rxjs";
import { errorManage } from "src/common/error/error.Manage";

@Injectable()
export class jwtGuard implements CanActivate{
    constructor(private jwtService:JwtService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> | any {
       try{
        const req:Request=context.switchToHttp().getRequest();
        const headerAuth=req.headers.authorization;
        console.log("The token is");
        const token=headerAuth.split(" ")[1];
        console.log(token);
        
          
        if(!headerAuth){
            throw new errorManage({
                type:"UNAUTHORIZED",
                message:"the token have expired"
            }); 
        }
        this.jwtService.verify(token);
        const decodeJwt=this.jwtService.decode(token);
        const user={
            email:decodeJwt.email,
            password:decodeJwt.password
        }
        req.user=user;
        return true ;
       }catch(err:any){ 
        throw errorManage.errorMethod(err.message);
       }
    }
}