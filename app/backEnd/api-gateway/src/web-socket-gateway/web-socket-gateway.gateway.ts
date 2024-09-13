import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { WebSocketGatewayService } from './web-socket-gateway.service';
import {WebSocket} from 'ws';

import { OnModuleInit } from '@nestjs/common';
import { rejects } from 'assert';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebSocketGatewayGateway implements OnModuleInit{
  constructor(private readonly webSocketGatewayService: WebSocketGatewayService) {}

  private client:WebSocket;
  private pendingResponses: Map<number, (response: any) => void> = new Map();

  onModuleInit() {
      this.client=new WebSocket("ws://localhost:8080/ws/myHandler");

      this.client.on("open",()=>{
        //console.log("Connected to server");
      });

      this.client.on("message",(data)=>{
        const message = JSON.parse(data.toString());
        //console.log(message);
        

        if(message.id && this.pendingResponses.has(message.id)){
          const resolve=this.pendingResponses.get(message.id);
          resolve(message.response);
          this.pendingResponses.delete(message.id);
        }

      });

      this.client.on("error",()=>{
       // console.log("Connected to server");
      });

      // this.client.on("close",()=>{
      //   console.log("Connected to server");
      // });

  }


  @SubscribeMessage('message')
  create(@ConnectedSocket() client:WebSocket,@MessageBody() message: any) {

    if (this.client.readyState === WebSocket.OPEN) {

     this.client.send(JSON.stringify(message));
      
      return new Promise((resolve,rejects)=>{
        
      })
    }
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
