import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

  constructor(private httpService:HttpService,
    @InjectRepository(Order) private orderRepository:Repository<Order>
  ){}

  async create(dataOrder: CreateOrderDto) {
    
    const results:any[]= await Promise.all(
      dataOrder.dishes.map(async (dishName)=> {
         await this.httpService.get(`localhost:3004/dish/${dishName}`);
      })
    );

    const dataSave=this.orderRepository.create({
      ...dataOrder,
      dishes:results
    });
    this.orderRepository.save(dataSave);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
