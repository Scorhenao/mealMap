import { AppService } from './app.service';
import { createTokenDto } from './common/dto/createToken';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(Data: createTokenDto, request: any): any;
    returnVerifyRole(role: string, role2: string, req: any): void;
}
