import { Module } from '@nestjs/common';
import { CachingService } from './caching.service';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    CacheModule.register({
      store: 'memory',
      max: 120,
      ttl: 70,
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
