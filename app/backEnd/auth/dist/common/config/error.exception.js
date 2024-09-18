"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpFilter = class HttpFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception.message ? exception.message : "There is a internal server Error";
        if (exception instanceof common_1.HttpException) {
            response.status(status).json({
                status: status,
                path: request.url,
                timestamp: new Date().toISOString(),
                method: request.method,
                message: message
            });
        }
        else {
            console.log(exception);
            response.status(status).json({
                status: status,
                path: request.url,
                timestamp: new Date().toISOString(),
                method: request.method,
                message: message
            });
        }
    }
};
exports.HttpFilter = HttpFilter;
exports.HttpFilter = HttpFilter = __decorate([
    (0, common_1.Catch)()
], HttpFilter);
//# sourceMappingURL=error.exception.js.map