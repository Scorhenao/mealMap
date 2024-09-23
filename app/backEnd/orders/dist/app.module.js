"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orders_module_1 = require("./orders/orders.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const db_config_1 = require("./config/db.config");
const axios_1 = require("@nestjs/axios");
const core_1 = require("@nestjs/core");
const exception_filter_1 = require("./config/filters/exception.filter");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            orders_module_1.OrdersModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: db_config_1.credentialsOptions,
            }),
            axios_1.HttpModule.registerAsync({
                useFactory: () => ({
                    timeout: 5000,
                    maxRedirects: 5,
                }),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: exception_filter_1.allManageErrors,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map