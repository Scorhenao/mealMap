import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { ApiProperty } from '@nestjs/swagger';

export class responseOrders extends CreateOrderDto {
    @ApiProperty({example:"0ed35f6b-f2dd-4911-919f-ccd57369b74e"})
    idUser:string;

    @ApiProperty({example:"floor 1 table 102"})
    table:string;

    @ApiProperty({example:"pedro"})
    name:string;
}
