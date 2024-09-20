import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Owner } from "src/owner/entities/owner.entity";
import { Role } from "src/role/entities/role.entity";
import { User } from "src/user/entities/user.entity";



@Injectable()
export class typeOrmConnections implements TypeOrmOptionsFactory{
    constructor( private configService: ConfigService){}

    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        console.log(this.configService.get("DB_HOST"));
        
        return{
            type:"mysql",
            host:this.configService.get<string>("DB_HOST"),
            port:+this.configService.get<string>("DB_PORT"),
            username:this.configService.get<string>("DB_USERNAME"),
            password:this.configService.get<string>("DB_PASSWORD"),
            database:this.configService.get<string>("DB_DATABASE"),
            entities:[User,Role,Owner],
            synchronize:true
        }
    }
}