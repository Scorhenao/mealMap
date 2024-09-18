"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFactory = void 0;
const factory_metadata_storage_1 = require("../storages/factory.metadata.storage");
const faker_1 = require("@faker-js/faker");
class DataFactory {
    static createForClass(target) {
        if (!target) {
            throw new Error(`Target class "${target}" passed in to the "TemplateFactory#createForClass()" method is "undefined".`);
        }
        const properties = factory_metadata_storage_1.FactoryMetadataStorage.getPropertyMetadatasByTarget(target);
        return {
            generate: (count, values = {}) => {
                const ret = Array();
                for (let i = 0; i < count; i++) {
                    ret.push(this.generate(properties, values));
                }
                return ret;
            },
        };
    }
    static generate(properties, values) {
        const ctx = Object.assign({}, values);
        return properties.reduce((r, p) => (Object.assign({ [p.propertyKey]: ctx[p.propertyKey] = typeof p.arg === 'function' ? p.arg(faker_1.faker, ctx) : p.arg }, r)), {});
    }
}
exports.DataFactory = DataFactory;
