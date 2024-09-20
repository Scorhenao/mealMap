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
            console.log("llegamos al guard de jwt");
            
            const refreshToken=request.headers.authorization.split(" ")[1];          
            
            if(this.jwtService.verify(refreshToken,{ignoreExpiration:false})){
                console.log("all this perfect");
                
                const tokenDecode=this.jwtService.decode(refreshToken);
                console.log("el token decofificado es");
                
                console.log(tokenDecode);
                
                request.dataUser=tokenDecode;
                return true;
            }
        }catch(err:any){          
            console.log("entro al error");
            
            throw errorManage.errorMethod(err.message);
        }

    }
}

