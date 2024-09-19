import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrdersGuard } from './guard/orders.guard';
import { apiKeyGuard } from './guard/api-key.guard';
import { ConfirmOrderInterceptor } from './interceptor/interceptor.interceptor';

@Module({
  imports:[
    TypeOrmModule.forFeature([Order]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService,OrdersGuard,apiKeyGuard,ConfirmOrderInterceptor],
  exports:[OrdersService]
})
export class OrdersModule {}
