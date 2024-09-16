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

  async assignTable(combinedData: any) {
    const { quantityOfPersons, tables } = combinedData;
    return tables.find(table => table.availability && table.quantityOfChairs >= quantityOfPersons);
  }

  // async createOrder(orderData: any) {
  //   // Implementar la lógica para crear una orden
  //   return { success: true, order: orderData }; // Simulando una respuesta
  // }
}
