import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class OrdersGuard implements CanActivate {
    private httpService;
    constructor(httpService: HttpService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
