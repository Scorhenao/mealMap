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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersGuard = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const error_manage_1 = require("../../config/error/error.manage");
let OrdersGuard = class OrdersGuard {
    constructor(httpService) {
        this.httpService = httpService;
    }
    canActivate(context) {
        try {
            const req = context.switchToHttp().getRequest();
            const roles = { uno: "client", dos: "admin" };
            const data = this.httpService.post("http://localhost:3000/verifyRole", roles)
                .pipe((0, operators_1.map)(response => response.data));
            console.log("los roles son ");
            console.log(data);
            if (!data) {
                throw new error_manage_1.errorManage({
                    type: "UNAUTHORIZED",
                    message: "You are not autoriced"
                });
            }
            return true;
        }
        catch (err) {
            throw error_manage_1.errorManage.errorManageController(err.message);
        }
    }
};
exports.OrdersGuard = OrdersGuard;
exports.OrdersGuard = OrdersGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], OrdersGuard);
//# sourceMappingURL=orders.guard.js.map