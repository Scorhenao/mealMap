import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { idText } from 'typescript';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  quantityOfPlates:number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  quantityOfDrinks:number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  quantityOfPeoples:number;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  dishes:string[];


  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  drinks:string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  Table:string;


  @ApiProperty()
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
