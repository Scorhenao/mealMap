import { Module } from '@nestjs/common';
import { WebSocketGatewayGateway } from './web-socket-gateway.gateway';
import { WebSocketGatewayService } from './web-socket-gateway.service';
@Module({
  providers: [WebSocketGatewayGateway, WebSocketGatewayService],
})
export class WebSocketGatewayModule {}
