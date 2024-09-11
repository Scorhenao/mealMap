"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seeder = void 0;
const core_1 = require("@nestjs/core");
const seeder_module_1 = require("./seeder.module");
const seeder_service_1 = require("./seeder.service");
async function bootstrap(options) {
    const app = await core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule.register(options));
    const seedersService = app.get(seeder_service_1.SeederService);
    await seedersService.run();
    await app.close();
}
const seeder = (options) => {
    return {
        run(seeders) {
            bootstrap(Object.assign(Object.assign({}, options), { seeders }));
        },
    };
};
exports.seeder = seeder;
