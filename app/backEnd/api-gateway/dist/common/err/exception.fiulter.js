"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptioManage = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptioManage = class HttpExceptioManage {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = "There was an error processing your request. Please try again later.";
        if (exception instanceof common_1.HttpException) {
            console.log("entramos");
            console.log(request);
            status = exception.getStatus();
            response.status(status).json({
                status: status,
                timeStamp: new Date().toISOString(),
                path: request.url,
                method: request.method,
                message: exception.message
            });
        }
        else {
            response.status(status).json({
                status: status,
                timeStamp: new Date().toISOString(),
                method: request.method,
                path: request.url,
                message: message
            });
        }
    }
};
exports.HttpExceptioManage = HttpExceptioManage;
exports.HttpExceptioManage = HttpExceptioManage = __decorate([
    (0, common_1.Catch)()
], HttpExceptioManage);
//# sourceMappingURL=exception.fiulter.js.map