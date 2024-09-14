import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrdersGuard } from './guard/orders.guard';

@Module({
  imports:[
    //TypeOrmModule.forFeature([Order]),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService,OrdersGuard],
  exports:[OrdersService]
})
export class OrdersModule {}
