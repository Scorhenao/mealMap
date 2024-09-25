import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsDate, IsIn, IsInt, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { idText } from 'typescript';
import { Dish } from './dishes.dto';
import { Drink } from './drinks.dto';

export class CreateOrderDto {

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  quantityOfPeoples:number;

  @ApiProperty({example:[
    {
        "name":"bandeja paisa",
        "ingredient":[
            {"name":"arroz"},
            {"name":"chorizo"},
            {"name":"chicharron"},
            {"name":"patacon"}
        ],
        "notIngredients":[
            {"name":"aguacate"}
        ]
    }]})
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({each:true})
  @Type(()=>Dish)
  dishes:Dish[];


  @ApiProperty({example:[
    "cocacola",
    "milo",
    "jugo mango"
  ],
  })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested({each:true})
  @Type(()=>Drink)
  drinks:Drink[];

  @IsNotEmpty()
  @IsString()
  table:string;


  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  idUser:string;

  @ApiProperty({example:40000})
  @IsNotEmpty()
  @IsNumber()
  totalPrice:number;

  @IsNotEmpty()
  @Type(()=>Date)
  @IsDate()
  date: Date;
}
