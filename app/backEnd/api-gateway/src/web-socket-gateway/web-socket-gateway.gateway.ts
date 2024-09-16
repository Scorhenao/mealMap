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
      this.client=new WebSocket("ws://localhost:8080/websocket");

      this.client.on("open",()=>{
        //console.log("Connected to server");
      });

      this.client.on("error",()=>{
       // console.log("Connected to server");
      });
  }


  @SubscribeMessage('message')
  create(@ConnectedSocket() client:WebSocket,@MessageBody() message: any) {
    this.webSocketGatewayService.sendMessage(message,client);
    client.emit("message","hola");
  }
}
