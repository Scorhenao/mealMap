import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Order } from "src/orders/entities/order.entity";

@Injectable()
export class credentialsOptions implements TypeOrmOptionsFactory{
    constructor(private configService:ConfigService){}

    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {      
    return {
        type:"mysql",
        host:this.configService.get<string>("HOST"),
        port:+this.configService.get<string>("PORT"),
        username:this.configService.get<string>("DB_USERNAME"),
        password:this.configService.get<string>("PASSWORD"),
        database:this.configService.get<string>("DATABASE"),
        entities:[Order],
        synchronize:true
    }
    }
}
