import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CachingService {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    private httpService: HttpService,
  ) {}

  async getCachedData(key: string) {
    const key2 = ``;
    const getData = await this.cache.get(key);
    if (getData) {
      return getData;
    }
    const data = this.httpService.get('as');
  }
}
