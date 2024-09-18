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
exports.jwtGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const error_Manage_1 = require("../common/error/error.Manage");
let jwtGuard = class jwtGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        try {
            const req = context.switchToHttp().getRequest();
            const headerAuth = req.headers.authorization;
            console.log("The token is");
            const token = headerAuth.split(" ")[1];
            console.log(token);
            if (!headerAuth) {
                throw new error_Manage_1.errorManage({
                    type: "UNAUTHORIZED",
                    message: "the token have expired"
                });
            }
            this.jwtService.verify(token);
            const decodeJwt = this.jwtService.decode(token);
            const user = {
                email: decodeJwt.email,
                password: decodeJwt.password
            };
            req.user = user;
            return true;
        }
        catch (err) {
            throw error_Manage_1.errorManage.errorMethod(err.message);
        }
    }
};
exports.jwtGuard = jwtGuard;
exports.jwtGuard = jwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], jwtGuard);
//# sourceMappingURL=jwt.guard.js.map