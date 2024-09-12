import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AppService } from "src/app.service";
import { errorManage } from "src/common/error/error.Manage";


@Injectable()
export class localStrategy extends PassportStrategy(Strategy){

    constructor(@Inject() private service:AppService){
        console.log("entrmos al constructor");
        
        super({
            usernameField:"email",passwordField:"password"
        });
    }

    validate(email:string,password:string){
        try{
            console.log("entramos");
            
            const data=this.service.returnUser(email,password);
            if(!data){
                throw new errorManage({
                    type:"BAD_REQUEST",
                    message:"User not found for create token"
                });
            }
            return data;
        }catch(err:any){
            throw errorManage.errorMethod(err.message);
        }
    }
}