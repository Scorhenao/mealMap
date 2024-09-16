import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import {map} from 'rxjs/operators';


@Injectable()
export class OrdersService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  async create(dataOrder: CreateOrderDto) {
    const results=this.orderRepository.create(dataOrder);
    await this.orderRepository.save(results);
    return results;
  }
}
