import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class Drink{
    @ApiProperty({example:"cocacola"})
    @IsString()
    name:string;
}