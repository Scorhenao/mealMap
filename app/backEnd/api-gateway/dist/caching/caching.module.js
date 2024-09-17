"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachingModule = void 0;
const common_1 = require("@nestjs/common");
const caching_service_1 = require("./caching.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const axios_1 = require("@nestjs/axios");
let CachingModule = class CachingModule {
};
exports.CachingModule = CachingModule;
exports.CachingModule = CachingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register({
                store: "memory",
                max: 120,
                ttl: 70
            }),
            axios_1.HttpModule.register({
                timeout: 5000,
                maxRedirects: 5,
            }),
        ],
        providers: [caching_service_1.CachingService],
        exports: [caching_service_1.CachingService]
    })
], CachingModule);
//# sourceMappingURL=caching.module.js.map