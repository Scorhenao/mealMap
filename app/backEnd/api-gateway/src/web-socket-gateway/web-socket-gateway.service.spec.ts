import { Test, TestingModule } from '@nestjs/testing';
import { WebSocketGatewayService } from './web-socket-gateway.service';

describe('WebSocketGatewayService', () => {
  let service: WebSocketGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebSocketGatewayService],
    }).compile();

    service = module.get<WebSocketGatewayService>(WebSocketGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
