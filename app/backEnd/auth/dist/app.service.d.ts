import { HttpService } from '@nestjs/axios';
import { JwtService } from '@nestjs/jwt';
export declare class AppService {
    private jwtService;
    private http;
    constructor(jwtService: JwtService, http: HttpService);
    returnUser(email: string, password: string): import("rxjs").Observable<any>;
    returnToken(data: any): any;
    validateRoles(role: any, roles: string[]): string;
}
