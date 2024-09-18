import { OrdersService } from './orders.service';
import { Server } from 'socket.io';
export declare class OrdersController {
    private readonly ordersService;
    server: Server;
    constructor(ordersService: OrdersService);
    create(data2: any): string;
}
