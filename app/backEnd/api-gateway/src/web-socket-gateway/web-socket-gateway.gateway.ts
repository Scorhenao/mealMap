import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { WebSocketGatewayService } from './web-socket-gateway.service';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebSocketGatewayGateway {
  constructor(private readonly webSocketGatewayService: WebSocketGatewayService) {}

  @WebSocketServer()
  server:Server;

  @SubscribeMessage('message')
  create(@MessageBody() createWebSocketGatewayDto: any) {
    console.log("entramos");
    console.log(createWebSocketGatewayDto);
    
    this.server.emit('difamelo',createWebSocketGatewayDto);
  }

  @SubscribeMessage('findAllWebSocketGateway')
  findAll() {
    return this.webSocketGatewayService.findAll();
  }

  @SubscribeMessage('findOneWebSocketGateway')
  findOne(@MessageBody() id: number) {
    return this.webSocketGatewayService.findOne(id);
  }

  @SubscribeMessage('updateWebSocketGateway')
  update(@MessageBody() updateWebSocketGatewayDto: any) {
    return this.webSocketGatewayService.update(updateWebSocketGatewayDto.id, updateWebSocketGatewayDto);
  }

  @SubscribeMessage('removeWebSocketGateway')
  remove(@MessageBody() id: number) {
    return this.webSocketGatewayService.remove(id);
  }
}
