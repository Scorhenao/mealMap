import { Test, TestingModule } from '@nestjs/testing';
import { WebSocketGatewayGateway } from './web-socket-gateway.gateway';
import { WebSocketGatewayService } from './web-socket-gateway.service';

describe('WebSocketGatewayGateway', () => {
  let gateway: WebSocketGatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebSocketGatewayGateway, WebSocketGatewayService],
    }).compile();

    gateway = module.get<WebSocketGatewayGateway>(WebSocketGatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
