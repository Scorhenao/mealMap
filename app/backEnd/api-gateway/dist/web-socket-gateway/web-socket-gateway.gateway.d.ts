import { WebSocketGatewayService } from './web-socket-gateway.service';
import { WebSocket } from 'ws';
import { OnModuleInit } from '@nestjs/common';
export declare class WebSocketGatewayGateway implements OnModuleInit {
    private readonly webSocketGatewayService;
    constructor(webSocketGatewayService: WebSocketGatewayService);
    private clientExtern;
    onModuleInit(): void;
    create(clientConnectMe: WebSocket, data: any): Promise<unknown>;
    findAll(): string;
    findOne(id: number): string;
    update(updateWebSocketGatewayDto: any): string;
    remove(id: number): string;
}
