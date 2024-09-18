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
exports.AppService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const rxjs_1 = require("rxjs");
const error_Manage_1 = require("./common/error/error.Manage");
let AppService = class AppService {
    constructor(jwtService, http) {
        this.jwtService = jwtService;
        this.http = http;
    }
    returnUser(email, password) {
        try {
            const dataUser = this.http.post("http://localhost:3000,user", { email: email, password: password }).
                pipe((0, rxjs_1.map)(response => response.data));
            if (!dataUser) {
                throw new error_Manage_1.errorManage({
                    type: "BAD_REQUEST",
                    message: "El usuario debe estar en la base de datos"
                });
            }
            return dataUser;
        }
        catch (err) {
            throw error_Manage_1.errorManage.errorMethod(err.message);
        }
    }
    returnToken(data) {
        console.log("entramos a crear el token");
        const acces_token = this.jwtService.sign(data, { expiresIn: '20' });
        const refres_token = this.jwtService.sign(data, { expiresIn: '20d' });
        return {
            acces_token,
            refres_token
        };
    }
    validateRoles(role, roles) {
        try {
            if (!roles.includes(role.role)) {
                throw new error_Manage_1.errorManage({
                    type: "FORBIDDEN",
                    message: "El usuario no tiene los permisos necesarios"
                });
            }
            return "Efectivamente tiene los roles melos";
        }
        catch (err) {
            throw error_Manage_1.errorManage.errorMethod(err.message);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        axios_1.HttpService])
], AppService);
//# sourceMappingURL=app.service.js.map