import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
// import { CreateOrderDto } from './dto/create-order.dto';
import { errorManage } from 'src/config/error/error.manage';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() data2: any) {
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

  // @Get()
  // findAll() {
  //   try {
  //     const createData = this.ordersService.findAll();
  //     return createData;
  //   } catch (err: any) {
  //     throw new errorManage({
  //       type: 'BAD_REQUEST',
  //       message: 'not cant create user',
  //     });
  //   }
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   try {
  //     const findData = this.ordersService.findOne(+id);
  //     return findData;
  //   } catch (err: any) {
  //     throw new errorManage({
  //       type: 'BAD_REQUEST',
  //       message: 'not cant create user',
  //     });
  //   }
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ordersService.remove(+id);
  // }
}
