import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class Drink{
    @ApiProperty({example:"cocacola"})
    name:string;
}