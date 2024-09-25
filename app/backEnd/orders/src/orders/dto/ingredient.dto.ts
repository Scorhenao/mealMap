import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ingredient{
    @ApiProperty({example:"arroz"})
    @IsString()
    name:string;
}