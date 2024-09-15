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
            const request=context.switchToHttp().getRequest();
            console.log(request.headers);
            
            const tokenAccess=request.headers.authorization.split(" ")[1];
            const refreshToken=request.headers["x-refresh-token"];
            console.log("estamos en jwtGuard");
            
            // console.log(tokenAccess);
            // console.log("y el refresh token es ");
            // console.log(refreshToken);
            
            
            
            if(!this.jwtService.verify(tokenAccess) || !this.jwtService.verify(refreshToken)){
                request.validationToken=true;
                const tokenDecode=this.jwtService.decode(tokenAccess);
    
                
                request.user=tokenDecode;
                return true;
            }else{
                console.log("el token paso");
                
                const tokenDecode=this.jwtService.decode(tokenAccess);

                
                request.user=tokenDecode;
                request.validationToken=false;
                return true;
            }
        }catch(err:any){          
            throw errorManage.errorMethod(err.message);
        }

    }
}

