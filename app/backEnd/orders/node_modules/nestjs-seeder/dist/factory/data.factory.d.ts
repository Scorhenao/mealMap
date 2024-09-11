import { Type } from '@nestjs/common';
import { Factory } from '../interfaces';
export declare class DataFactory {
    static createForClass(target: Type<unknown>): Factory;
    private static generate;
}
