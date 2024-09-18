import { Strategy } from "passport-local";
import { AppService } from "src/app.service";
declare const localStrategy_base: new (...args: any[]) => Strategy;
export declare class localStrategy extends localStrategy_base {
    private service;
    constructor(service: AppService);
    validate(email: string, password: string): import("rxjs").Observable<any>;
}
export {};
