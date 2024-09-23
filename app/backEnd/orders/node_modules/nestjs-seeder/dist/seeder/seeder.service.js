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
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
let SeederService = class SeederService {
    constructor(seeders) {
        this.seeders = seeders;
    }
    async run() {
        if (this.shouldRefresh())
            await this.drop();
        return this.seed();
    }
    async seed() {
        // Don't use `Promise.all` during insertion.
        // `Promise.all` will run all promises in parallel which is not what we want.
        for (const seeder of this.seeders) {
            await seeder.seed();
            console.log(`${seeder.constructor.name} completed`);
        }
    }
    async drop() {
        return Promise.all(this.seeders.map((s) => s.drop()));
    }
    shouldRefresh() {
        const argv = process.argv;
        return argv.includes("-r") || argv.includes("--refresh");
    }
};
SeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Array])
], SeederService);
exports.SeederService = SeederService;
