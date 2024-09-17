"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketGatewayGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const web_socket_gateway_service_1 = require("./web-socket-gateway.service");
const ws_1 = require("ws");
let WebSocketGatewayGateway = class WebSocketGatewayGateway {
    constructor(webSocketGatewayService) {
        this.webSocketGatewayService = webSocketGatewayService;
    }
    onModuleInit() {
        this.clientExtern = new ws_1.WebSocket("ws://localhost:8080/ws/myHandler");
        this.clientExtern.on("open", () => {
            console.log("Connected to server");
        });
        this.clientExtern.on("error", () => {
            console.log("error in the conection");
        });
    }
    create(clientConnectMe, data) {
        clientConnectMe.send(JSON.stringify({ message: "hola desde el server" }));
        if (this.clientExtern.readyState === ws_1.WebSocket.OPEN) {
            const eventMessage = {
                event: "/app/message1",
                data: data
            };
            this.clientExtern.send(JSON.stringify(eventMessage));
            return new Promise((resolve, rejects) => {
            });
        }
    }
    findAll() {
        return this.webSocketGatewayService.findAll();
    }
    findOne(id) {
        return this.webSocketGatewayService.findOne(id);
    }
    update(updateWebSocketGatewayDto) {
        return this.webSocketGatewayService.update(updateWebSocketGatewayDto.id, updateWebSocketGatewayDto);
    }
    remove(id) {
        return this.webSocketGatewayService.remove(id);
    }
};
exports.WebSocketGatewayGateway = WebSocketGatewayGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ws_1.WebSocket, Object]),
    __metadata("design:returntype", void 0)
], WebSocketGatewayGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllWebSocketGateway'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebSocketGatewayGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneWebSocketGateway'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WebSocketGatewayGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateWebSocketGateway'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WebSocketGatewayGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeWebSocketGateway'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], WebSocketGatewayGateway.prototype, "remove", null);
exports.WebSocketGatewayGateway = WebSocketGatewayGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [web_socket_gateway_service_1.WebSocketGatewayService])
], WebSocketGatewayGateway);
//# sourceMappingURL=web-socket-gateway.gateway.js.map