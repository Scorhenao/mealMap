"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryMetadataStorage = exports.FactoryMetadataStorageHost = void 0;
class FactoryMetadataStorageHost {
    constructor() {
        this.properties = new Array();
    }
    addPropertyMetadata(metadata) {
        this.properties.push(metadata);
    }
    getPropertyMetadatasByTarget(target) {
        return this.properties.filter(property => property.target === target);
    }
}
exports.FactoryMetadataStorageHost = FactoryMetadataStorageHost;
const globalRef = global;
exports.FactoryMetadataStorage = globalRef.FactoryMetadataStorage ||
    (globalRef.FactoryMetadataStorage = new FactoryMetadataStorageHost());
