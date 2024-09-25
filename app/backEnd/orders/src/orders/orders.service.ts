import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Between, Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import { errorManage } from 'src/config/error/error.manage';
import { response } from 'express';

@Injectable()
export class OrdersService {
  private date = new Date();
  private dateToday: any = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;

  constructor(
    private httpService: HttpService,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
  ) {}

  async create(dataOrder: any) {
    try{     
    let quantityOfDrinks=dataOrder.drinks.length;
    let quantityOfDished=dataOrder.dishes.length;

    const dataCreate =this.orderRepository.create({
      quantityOfDrinks:quantityOfDrinks,
      quantityOfPlates:quantityOfDished,
      quantityOfPeoples:dataOrder.quantityOfPeoples,
      dishes:dataOrder.dishes,
      drinks:dataOrder.drinks,
      Table:dataOrder.table,
      name:dataOrder.name,
      data:dataOrder.date,
      totalPrice:dataOrder.totalPrice
    });  
    
    await this.orderRepository.save(dataCreate);
    return dataCreate;
    
    }catch(err:any){
      throw new err;
    }
  }


  async returnAllOrders(){
    try{
      const dataOrders= await this.orderRepository.find();
      if(!dataOrders){
        throw new errorManage({
          type:"NOT_FOUND",
          message:"there is not orders"
        });
      }
    }catch(err:any){
      throw errorManage.errorManageController(err.message);
    }
  }


  async returnOrdersDay(){
    try{
      
      const dateInitial=new Date(`${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()-1}`);

      const dateFinal=new Date();
      
      dateInitial.setHours(this.date.getHours(),0,0,0);
      dateFinal.setHours(this.date.getHours(),0,0,0);   
      const dataOrders=await this.orderRepository.find({
        where:{
          data:Between (dateInitial,dateFinal)
        }
      });
      if(!dataOrders){
        throw new errorManage({
          type:"NOT_FOUND",
          message:""
        });
      }
      return dataOrders;
    }catch(err:any){
      throw errorManage.errorManageController(err.message);
    }
  }

}
