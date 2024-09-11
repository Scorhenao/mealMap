import { DynamicModule, Provider, Type, ForwardReference } from '@nestjs/common';
import { Seeder } from './seeder.interface';
export interface SeederModuleOptions {
    seeders: Provider<Seeder>[];
    imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
    providers?: Provider[];
}
export declare class SeederModule {
    static register(options: SeederModuleOptions): DynamicModule;
}
