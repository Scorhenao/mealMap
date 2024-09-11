import { Module } from '@nestjs/common';
import { WebSocketGatewayService } from './web-socket-gateway.service';
import { WebSocketGatewayGateway } from './web-socket-gateway.gateway';

@Module({
  providers: [WebSocketGatewayGateway, WebSocketGatewayService],
})
export class WebSocketGatewayModule {}
