import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(entitie: string, role: string): Promise<import("./entitie/permission.entity").Permission>;
}
