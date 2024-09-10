import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {credentialsOptions} from './config/db.config';

import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [ OrdersModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".env"
    }),
  TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    useClass:credentialsOptions
  }),
  
HttpModule.registerAsync({
  useFactory: () => ({
    timeout: 5000,
    maxRedirects: 5,
  })
}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
