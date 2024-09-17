import { HttpService } from '@nestjs/axios';
import { Cache } from '@nestjs/cache-manager';
export declare class CachingService {
    private cache;
    private httpService;
    constructor(cache: Cache, httpService: HttpService);
    getCachedData(key: string): Promise<unknown>;
}
