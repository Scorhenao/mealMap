import { Seeder } from "./seeder.interface";
export declare class SeederService {
    private readonly seeders;
    constructor(seeders: Seeder[]);
    run(): Promise<any>;
    seed(): Promise<any>;
    drop(): Promise<any>;
    shouldRefresh(): boolean;
}
