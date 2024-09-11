
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { errorManage } from "src/common/config/error.manage";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private configService:ConfigService){
        super({
            jwtFromHeader:(req:Request)=>{
                if(!req.signedCookies.token){
                    throw new errorManage({
                        type:"UNAUTHORIZED",
                        message:"The token is required"
                    });
                }
                return req.signedCookies.token;
            },
            ignoreExpiration:false,
            secretOrKey:configService.get<string>("SECRET_JWT")
        });
    }
  validate(payload: any) {
    return { id: payload.id, email: payload.email, role: payload.role };
  }
}
