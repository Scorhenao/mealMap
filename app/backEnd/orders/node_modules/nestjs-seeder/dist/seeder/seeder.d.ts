import { Seeder } from "./seeder.interface";
import { Provider, Type, DynamicModule, ForwardReference } from "@nestjs/common";
export interface SeederOptions {
    imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
    providers?: Provider[];
}
export interface SeederRunner {
    run(seeders: Provider<Seeder>[]): void;
}
export declare const seeder: (options: SeederOptions) => SeederRunner;
