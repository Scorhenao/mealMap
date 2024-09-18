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
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const createToken_1 = require("./common/dto/createToken");
const local_guard_1 = require("./guards/local.guard");
const jwt_guard_1 = require("./guards/jwt.guard");
const apiKey_guard_1 = require("./guards/apiKey.guard");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(Data, request) {
        if (request.validationToken) {
            return this.appService.returnToken(Data);
        }
        else {
            return true;
        }
    }
    returnVerifyRole(role, role2, req) {
        try {
            this.appService.validateRoles(req.user, [role, role2]);
        }
        catch (err) {
            throw err;
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)("token"),
    (0, common_1.UseGuards)(apiKey_guard_1.apiKeyGuard, jwt_guard_1.jwtGuard, local_guard_1.localGuard),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createToken_1.createTokenDto, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("verifyRole/:Role/:Role2"),
    (0, common_1.UseGuards)(jwt_guard_1.jwtGuard, apiKey_guard_1.apiKeyGuard),
    __param(0, (0, common_1.Param)("Role")),
    __param(1, (0, common_1.Param)("Role2")),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "returnVerifyRole", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map