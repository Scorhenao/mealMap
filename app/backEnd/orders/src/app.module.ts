import { Module, ValidationPipe } from '@nestjs/common';


import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { credentialsOptions } from './config/db.config';

import { HttpModule } from '@nestjs/axios';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { allManageErrors } from './config/filters/exception.filter';

@Module({
  imports: [
    OrdersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: credentialsOptions,
    }),

    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [],
  providers: [

    {
      provide: APP_FILTER,
      useClass: allManageErrors,
    }
    /*,
    {
      provide:APP_PIPE,
      useClass:ValidationPipe
    }*/
  ],
})
export class AppModule {}
