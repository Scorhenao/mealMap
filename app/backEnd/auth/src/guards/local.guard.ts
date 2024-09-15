import { HttpService } from "@nestjs/axios";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { AppService } from "src/app.service";
import { errorManage } from "src/common/error/error.Manage";

@Injectable()
export class localGuard implements CanActivate{
    constructor(private jwtService:JwtService,private appService:AppService){}
    async canActivate(context: ExecutionContext) {
        try{
            const req=context.switchToHttp().getRequest();
            const validateUser:any=await this.appService.validateUser(req.body);
              
            if(!validateUser){
                throw new errorManage({
                    type:"UNAUTHORIZED",
                    message:"the token have expired"
                }); 
            }
            console.log(validateUser);
            
            const user={
                email:validateUser.email,
                role:validateUser.role,
                name:validateUser.name
            }
            console.log("usuario autoizado");
            
            req.user=user;
            return true ;
           }catch(err:any){ 
            throw errorManage.errorMethod(err.message);
           }
        }
    }
