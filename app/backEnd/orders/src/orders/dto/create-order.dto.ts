import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { idText } from 'typescript';

export class CreateOrderDto {
  @ApiProperty({example:2})
  @IsNotEmpty()
  @IsInt()
  quantityOfPlates:number;

  @ApiProperty(
    {example:3}
  )
  @IsNotEmpty()
  @IsInt()
  quantityOfDrinks:number;

  @ApiProperty({example:1})
  @IsNotEmpty()
  @IsInt()
  quantityOfPeoples:number;

  @ApiProperty({example:[{dishes:{name:"bandeja paisa",ingredients:[{name:"arroz"},{name:"chicharron"}]}}]})
  @IsNotEmpty()
  @IsArray()
  dishes:string[];


  @ApiProperty({example:[{drinks:["cocacola,milo"]}]})
  @IsNotEmpty()
  @IsArray()
  drinks:string[];

  @IsNotEmpty()
  @IsString()
  Table:string;


  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsString()
  idUser:string;

  @IsNotEmpty()
  @IsDate()
  date:Date;
}
