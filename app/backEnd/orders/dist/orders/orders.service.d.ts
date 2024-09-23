import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private httpService;
    private orderRepository;
    constructor(httpService: HttpService, orderRepository: Repository<Order>);
    create(dataOrder: CreateOrderDto): Promise<void>;
}
