import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import {map} from 'rxjs/operators';


@Injectable()
export class OrdersService {
  // constructor(
  //   private httpService: HttpService,
  //   @InjectRepository(Order) private orderRepository: Repository<Order>,
  // ) {}

  async create(dataOrder: any) {
    let dishes=[];
    let drinks=[];
    for(let x of dataOrder.order.dishes){
      dishes.push(x.nameDish);
    }
    for(let p of dataOrder.order.drinks){
      drinks.push(p.nameDrink);
    }

    console.log("las bebidas y los platos finales estan");
    console.log(dishes);
    console.log(drinks);
    
    
    // const results=this.orderRepository.create(dataOrder);
    // await this.orderRepository.save(results);
    // return results;
  }
}
