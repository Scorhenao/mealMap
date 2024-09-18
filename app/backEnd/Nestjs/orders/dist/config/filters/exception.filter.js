"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allManageErrors = void 0;
const common_1 = require("@nestjs/common");
let allManageErrors = class allManageErrors {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus()
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (exception instanceof common_1.HttpException) {
            response.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                method: request.method,
                path: request.url,
                message: exception.message,
            });
        }
        else {
            response.status(status).json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                method: request.method,
                message: 'Internal Server Error',
            });
        }
    }
};
exports.allManageErrors = allManageErrors;
exports.allManageErrors = allManageErrors = __decorate([
    (0, common_1.Catch)()
], allManageErrors);
//# sourceMappingURL=exception.filter.js.map