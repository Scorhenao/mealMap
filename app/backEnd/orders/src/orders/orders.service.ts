import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { map } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  async create(dataOrder: CreateOrderDto) {
    const results: any[] = await Promise.all(
      dataOrder.dishes.map(async (dishName) => {
        this.httpService.get(`localhost:3004/dish/${dishName}`);
      }),
    );

    const tableId: any = this.httpService
      .get('http://localhost:8080/tables')
      .pipe(map((response) => response.data));

    console.log(results);

    const dataSave = this.orderRepository.create({
      ...dataOrder,
      dishes: results,
      idTable: tableId,
    });
    this.orderRepository.save(dataSave);
  }

}
