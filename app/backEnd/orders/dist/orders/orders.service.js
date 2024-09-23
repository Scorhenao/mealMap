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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
const rxjs_1 = require("rxjs");
let OrdersService = class OrdersService {
    constructor(httpService, orderRepository) {
        this.httpService = httpService;
        this.orderRepository = orderRepository;
    }
    async create(dataOrder) {
        const results = await Promise.all(dataOrder.dishes.map(async (dishName) => {
            this.httpService.get(`localhost:3002/dish/${dishName}`);
        }));
        const tableId = this.httpService
            .get('http://localhost:3000/tables')
            .pipe((0, rxjs_1.map)((response) => response.data));
        const dataSave = this.orderRepository.create({
            ...dataOrder,
            dishes: results,
            idTable: tableId,
        });
        this.orderRepository.save(dataSave);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [axios_1.HttpService,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map