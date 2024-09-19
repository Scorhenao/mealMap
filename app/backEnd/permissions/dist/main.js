"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seed_permission_1 = require("./config/seed/seed.permission");
const typeorm_1 = require("typeorm");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    const seedPermision = new seed_permission_1.seederPermission();
    await seedPermision.run(dataSource);
    app.enableCors();
    await app.listen(3007);
}
bootstrap();
//# sourceMappingURL=main.js.map