import { PropertyMetadata } from '../interfaces';
import { Type } from '@nestjs/common';
export declare class FactoryMetadataStorageHost {
    private properties;
    addPropertyMetadata(metadata: PropertyMetadata): void;
    getPropertyMetadatasByTarget(target: Type<unknown>): PropertyMetadata[];
}
export declare const FactoryMetadataStorage: FactoryMetadataStorageHost;
