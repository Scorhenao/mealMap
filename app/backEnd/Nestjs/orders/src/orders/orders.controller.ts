import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
// import { CreateOrderDto } from './dto/create-order.dto';
import { errorManage } from 'src/config/error/error.manage';
import {Server} from 'socket.io';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersGuard } from './guard/orders.guard';
import { log } from 'console';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { apiKeyGuard } from './guard/api-key.guard';
@Controller()
export class OrdersController {
  server:Server
  
  constructor(private readonly ordersService: OrdersService,private httpService:HttpService ) {}


  @Post("orders")
  @UseGuards(apiKeyGuard,OrdersGuard)
  create(@Body() data2:any) {
    try {
      //const createData = this.ordersService.create(data2);
      console.log("entramos a orders");
      
      return "hola";
    } catch (err: any) {
      throw new errorManage({
        type: 'BAD_REQUEST',
        message: 'not cant create user',
      });
    }
  }
}
