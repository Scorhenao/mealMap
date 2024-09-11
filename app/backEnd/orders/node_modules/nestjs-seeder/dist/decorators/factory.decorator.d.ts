/// <reference types="node" />
import { Faker } from '@faker-js/faker';
type BaseType = string | number | Date | Buffer | boolean | Record<string, any>;
export type FactoryValue = BaseType | Array<BaseType>;
export type FactoryValueGenerator = (faker?: Faker, ctx?: Record<string, any>) => FactoryValue;
export declare function Factory(arg: FactoryValueGenerator | FactoryValue): (target: Record<string, any>, propertyKey: string | symbol) => void;
export {};
