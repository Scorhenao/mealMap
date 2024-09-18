import { CreateOrderDto } from './dto/create-order.dto';
import { HttpService } from '@nestjs/axios';
export declare class OrdersService {
    private httpService;
    constructor(httpService: HttpService);
    create(dataOrder: CreateOrderDto): Promise<void>;
}
