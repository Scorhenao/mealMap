import { Controller, Post, Body, UseGuards, Req, UnauthorizedException, Res } from '@nestjs/common';
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
import { role } from './decorators/decorators.decorator';
import { Response } from 'express';
@Controller()
export class OrdersController {
  server:Server
  
  constructor(private readonly ordersService: OrdersService,private httpService:HttpService ) {}


  @Post("orders")
  @role("admin","client")
  @UseGuards(apiKeyGuard,OrdersGuard)
  create(@Body() data2:any,@Req() request:any, @Res() response:Response) {
    try {     
      response.json("data create melo");
    } catch (err: any) {
      throw new errorManage({
        type: 'BAD_REQUEST',
        message: 'not cant create user',
      });
    }
  }
}



// {
//   "role":"client",
//   "numeroDoc":1020222769,
//   "name":"juancho",
//   "order":{

//       "dishes":[

//           {
//               "nameDish":"papas francesas",
//               "price":2000
//           },

//           {
//               "nameDish":"frijoles",
//               "price":5000
//           }

//       ],


//       "drinks":[

//           {
//               "nameDrink":"cocacola",
//               "price":1000
//           },

//           {
//               "nameDrink":"pepsi",
//               "price":5500
//           }
//       ],


//       "quantityPeople":1

//   }
// }
