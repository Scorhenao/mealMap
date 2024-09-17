"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketGatewayService = void 0;
const common_1 = require("@nestjs/common");
let WebSocketGatewayService = class WebSocketGatewayService {
    create(createWebSocketGatewayDto) {
        return 'This action adds a new webSocketGateway';
    }
    findAll() {
        return `This action returns all webSocketGateway`;
    }
    findOne(id) {
        return `This action returns a #${id} webSocketGateway`;
    }
    update(id, updateWebSocketGatewayDto) {
        return `This action updates a #${id} webSocketGateway`;
    }
    remove(id) {
        return `This action removes a #${id} webSocketGateway`;
    }
};
exports.WebSocketGatewayService = WebSocketGatewayService;
exports.WebSocketGatewayService = WebSocketGatewayService = __decorate([
    (0, common_1.Injectable)()
], WebSocketGatewayService);
//# sourceMappingURL=web-socket-gateway.service.js.map