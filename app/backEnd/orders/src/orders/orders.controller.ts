import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
// import { CreateOrderDto } from './dto/create-order.dto';
import { errorManage } from 'src/config/error/error.manage';
import {Server} from 'socket.io';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersGuard } from './guard/orders.guard';
@Controller()
export class OrdersController {
  server:Server
  
  constructor(private readonly ordersService: OrdersService) {}


  @Post()
  @UseGuards(OrdersGuard)
  create(@Body() data2: CreateOrderDto) {
    try {
      const createData = this.ordersService.create(data2);
      return createData;
    } catch (err: any) {
      throw new errorManage({
        type: 'BAD_REQUEST',
        message: 'not cant create user',
      });
    }
  }
}
