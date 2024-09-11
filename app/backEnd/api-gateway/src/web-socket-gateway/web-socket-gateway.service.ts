import { Injectable } from '@nestjs/common';


@Injectable()
export class WebSocketGatewayService {
  create(createWebSocketGatewayDto: any) {
    return 'This action adds a new webSocketGateway';
  }

  findAll() {
    return `This action returns all webSocketGateway`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webSocketGateway`;
  }

  update(id: number, updateWebSocketGatewayDto: any) {
    return `This action updates a #${id} webSocketGateway`;
  }

  remove(id: number) {
    return `This action removes a #${id} webSocketGateway`;
  }
}
