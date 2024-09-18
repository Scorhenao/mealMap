import { Module } from '@nestjs/common';

import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { OwnerModule } from './owner/owner.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrsFilter } from './common/config/exception/errs.filter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule} from '@nestjs/config';
import { typeOrmConnections } from './common/config/database/db.config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [RoleModule, UserModule, OwnerModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".env"
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass:typeOrmConnections
    }),
    CommonModule
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
