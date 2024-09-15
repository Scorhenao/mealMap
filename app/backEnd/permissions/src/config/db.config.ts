import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Permission } from "src/entitie/permission.entity";



@Injectable()
export class typeOrmConfig implements TypeOrmOptionsFactory{
    constructor(private configService:ConfigService){}
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {        
        return{
            type:"mysql",
            host:this.configService.get<string>("DB_HOST"),
            port:+this.configService.get<string>("DB_PORT"),
            username:this.configService.get<string>("DB_USERNAME"),
            password:this.configService.get<string>("DB_PASSWORD"),
            database:this.configService.get<string>("DB_DATABASE"),
            entities:[Permission],
            synchronize:true
        }
    }
}