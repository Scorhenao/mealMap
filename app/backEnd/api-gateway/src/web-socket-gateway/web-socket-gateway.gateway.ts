import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { WebSocketGatewayService } from './web-socket-gateway.service';
import {WebSocket} from 'ws';
import { Server, Socket } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';


@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebSocketGatewayGateway implements OnModuleInit{
  constructor(private readonly webSocketGatewayService: WebSocketGatewayService) {}

  private client:WebSocket;
  @WebSocketServer()
  server:Server;

  onModuleInit() {
      this.client=new WebSocket("http://localhost:8080/ws/myHandler");

      this.client.on("open",()=>{
        console.log("conectado");
        
      });

      this.client.on("error",(err)=>{
        console.log("error");
        
       // console.log("Connected to server");
      });
  }


  @SubscribeMessage('message')
  create(@ConnectedSocket() client:WebSocket,@MessageBody() message: any) {
    this.webSocketGatewayService.sendMessage(message,client);
    console.log(message);
    
    client.emit("dishes","hola");
  }
}
