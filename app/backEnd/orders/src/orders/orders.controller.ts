import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UnauthorizedException,
  Res,
  Get,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
// import { CreateOrderDto } from './dto/create-order.dto';
import { errorManage } from 'src/config/error/error.manage';
import { Server } from 'socket.io';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersGuard } from './guard/orders.guard';
import { log } from 'console';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { apiKeyGuard } from './guard/api-key.guard';
import { role } from './decorators/decorators.decorator';
import { Response } from 'express';
import { ConfirmOrderInterceptor } from './interceptor/interceptor.interceptor';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiResponse,
  ApiResponseProperty,
  ApiTags,
} from '@nestjs/swagger';

import { responseOrders } from './dto/responseOrder';

@ApiTags('Orders')
@Controller()
export class OrdersController {
  server: Server;

  constructor(
    private readonly ordersService: OrdersService,
    private httpService: HttpService,
  ) {}

  @Post('orders')
  @role('admin', 'client', 'owner')
  @UseGuards(apiKeyGuard, OrdersGuard)
  @ApiBody({ type: CreateOrderDto })
  @UseInterceptors(ConfirmOrderInterceptor)
  async create(@Body(new ValidationPipe()) data2:CreateOrderDto,@Req() request:any, @Res() response:Response) {
    try {     
      const createOrder=await this.ordersService.create(data2);
      response.status(200).json(createOrder);
    } catch (err: any) {      
      throw new errorManage({
        type: 'BAD_REQUEST',
        message: 'not cant create user',
      });
    }
  }


 @Get("all")
 @role("admin","owner")
 @ApiOkResponse({type:[responseOrders]})
 @UseGuards(apiKeyGuard,OrdersGuard)
 async allOrders(){
  try{
    console.log("entrmaos");
    
    const data=await this.ordersService.returnAllOrders();
    return data;
  }catch(err:any){
    throw err;
  }
 }


  @Get()
  @role("admin","owner")
  @ApiOkResponse({type:[responseOrders]})
  @UseGuards(apiKeyGuard,OrdersGuard)
  async returnOrders(){
    try{
      const orders=await this.ordersService.returnOrdersDay();
      return orders;
    } catch (erre: any) {
      throw erre;
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
