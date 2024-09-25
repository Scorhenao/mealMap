import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ingredient } from "./ingredient.dto";

export class Dish{
    @ApiProperty({example:"bandeja paisa"})
    @IsNotEmpty()
    @IsString()
    name:string;

    @ApiProperty({example:[{name:"arroz"},{name:"banano"}]})
    @ValidateNested({each:true})
    @Type(()=>ingredient)
    ingredients:ingredient[];


    @ApiProperty({example:[{name:"chorizo"},{name:"mazamorra"}]})
    @ValidateNested({each:true})
    @Type(()=>ingredient)
    notIngredients:ingredient[];
}