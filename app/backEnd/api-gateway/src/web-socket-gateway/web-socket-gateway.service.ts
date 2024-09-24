import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as WebSocket from 'ws';

@Injectable()
export class WebSocketGatewayService implements OnModuleInit, OnModuleDestroy {
  private client: WebSocket;
  private readonly url = 'ws://localhost:8080/ws/myHandler'; // URL del WebSocket en Spring Boot
  // URL del WebSocket en Spring Boot

  onModuleInit() {
    this.client = new WebSocket(this.url); // URL of your Spring Boot WebSocket

    this.client.on('open', () => {
      console.log('Conectado al servidor WebSocket');
    });

    this.client.on('error', (error) => {
      console.error('Error de conexión: ' + error);
    });

    this.client.on('close', () => {
      console.log('Conexión cerrada');
    });
  }

  onModuleDestroy() {
    if (this.client) {
      this.client.close();
      console.log('Desconectado del servidor WebSocket');
    }
  }

  sendMessage(message: any, client: WebSocket) {
    if (this.client.readyState === WebSocket.OPEN) {
      this.client.on('message', (data) => {
        const message = data.toString();
        client.emit('response', JSON.parse(message));
      });
      this.client.send('getAllItems');
    } else {
      console.warn('No conectado al servidor WebSocket');
    }
  }
}
