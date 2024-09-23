import { FactoryValueGenerator, FactoryValue } from '../decorators/factory.decorator';
export interface PropertyMetadata {
    target: Function;
    propertyKey: string;
    arg: FactoryValueGenerator | FactoryValue;
}
