"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
const factory_metadata_storage_1 = require("../storages/factory.metadata.storage");
function Factory(arg) {
    return (target, propertyKey) => {
        factory_metadata_storage_1.FactoryMetadataStorage.addPropertyMetadata({
            target: target.constructor,
            propertyKey: propertyKey,
            arg,
        });
    };
}
exports.Factory = Factory;
