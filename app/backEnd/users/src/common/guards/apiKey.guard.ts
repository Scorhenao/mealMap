import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Observable } from "rxjs";
import { erroManage } from "../config/err/err.manage";


@Injectable()
export class apiKeyGuard implements CanActivate{
    
    constructor(private configService:ConfigService){
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       try{
        const request=context.switchToHttp().getRequest();
        const apiKey=request.headers["x-api-key"];  
        if(apiKey !== this.configService.get<string>("API_KEY")){
            console.log("entramos aca");
            
            throw new erroManage({
                type:"FORBIDDEN", 
                message :"The api key is required"
            });
        }
        console.log("pasmos el apikay");
        
        return true;
       }catch(err:any){
        console.log("entramos al error");
        
        throw err;
       }
    }
}