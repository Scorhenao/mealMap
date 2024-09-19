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

  async create(dataOrder: any) {
    return "hola";
    // let quantityOfDrinks=0;
    // let quantityOfDished=0;
    // let dishes=[];
    // let drinks=[];
    // for(let x of dataOrder.order.dishes){
    //   quantityOfDished++;
    //   dishes.push(x.nameDish);
    // }
    // for(let p of dataOrder.order.drinks){
    //   quantityOfDrinks++;
    //   drinks.push(p.nameDrink);
    // }

    // const dataCreate =this.orderRepository.create({
    //   quantityOfDrinks:quantityOfDrinks,
    //   quantityOfPlates:quantityOfDished,
    //   quantityOfPeoples:dataOrder.order.quantityOfPeoples,
    //   dishes:dishes,
    //   drinks:drinks,
    //   Table:dataOrder.table,
    //   name:dataOrder.name,
    //   idUser:dataOrder.numDocument,
    //   data:new Date(),
    //   notIngredients:dataOrder.notIngredients,
    // });
    
    
    // const results=this.orderRepository.create(dataOrder);
    // await this.orderRepository.save(results);
    // return results;
  }

  async assignTable(combinedData: any) {
    const { quantityOfPersons, tables } = combinedData;
    return tables.find(table => table.disponibility && table.quantityOfChairs >= quantityOfPersons);
  }


  async returnOrdersDay(){
    try{
      const dateCurently=new Date();
      const dataOrders=
    }catch(err:any){

    }
  }
  // async createOrder(orderData: any) {
  //   // Implementar la lógica para crear una orden
  //   return { success: true, order: orderData }; // Simulando una respuesta
  // }
}
