import { Module } from '@nestjs/common';

import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { OwnerModule } from './owner/owner.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrsFilter } from './config/exception/errs.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule} from '@nestjs/config';
import { typeOrmConnections } from './config/database/db.config';

@Module({
  imports: [RoleModule, UserModule, OwnerModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".env"
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass:typeOrmConnections
    })
  ],
  controllers: [],
  providers: [
    {
      provide:APP_FILTER,
      useClass:ErrsFilter
    }
  ],
})
export class AppModule {}
