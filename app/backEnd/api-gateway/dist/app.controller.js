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
exports.AppController = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const jwt_guard_1 = require("./verify-jwt/guard/jwt.guard");
const error_manage_1 = require("./common/config/error.manage");
const exception_fiulter_1 = require("./common/err/exception.fiulter");
let AppController = class AppController {
    constructor(httpService) {
        this.httpService = httpService;
    }
    returnOneUser() {
        try {
            let data = this.httpService.get("http://localhost:3001").pipe((0, rxjs_1.map)(response => response.data));
            data = null;
            if (!data) {
                throw new error_manage_1.errorManage({
                    type: 'BAD_REQUEST',
                    message: "The user not found"
                });
            }
            return data;
        }
        catch (err) {
            throw error_manage_1.errorManage.createSignatureError(err.message);
        }
    }
    returnAllUsers() {
        return this.httpService.get("http://localhost:3001/users").pipe((0, rxjs_1.map)(response => response.data));
    }
    returnOneOrder() { }
    returnAllOrders() { }
    sendNewUser(dataNewUser) {
        return this.httpService.post("http://localhost:3001/user", dataNewUser).pipe((0, rxjs_1.map)(response => response.data));
    }
    updateUser(data) {
        return this.httpService.patch("http://localhost:3001/user", data).pipe((0, rxjs_1.map)(response => response.data));
    }
    deleteUser(id) {
        return this.httpService.delete("http://localhost:3001/user").pipe((0, rxjs_1.map)(response => response.data));
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.UseFilters)(exception_fiulter_1.HttpExceptioManage),
    (0, common_1.Get)("user"),
    (0, common_1.UseGuards)(jwt_guard_1.guardJwt),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "returnOneUser", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.guardJwt),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "returnAllUsers", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "returnOneOrder", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "returnAllOrders", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "sendNewUser", null);
__decorate([
    (0, common_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "deleteUser", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppController);
//# sourceMappingURL=app.controller.js.map