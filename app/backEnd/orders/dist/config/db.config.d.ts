import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export declare class credentialsOptions implements TypeOrmOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions;
}
