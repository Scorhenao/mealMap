import { IsArray, IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { idText } from 'typescript';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  quantityOfPlates:number;

  @IsNotEmpty()
  @IsInt()
  quantityOfDrinks:number;

  @IsNotEmpty()
  @IsInt()
  quantityOfPeoples:number;

  @IsNotEmpty()
  @IsArray()
  dishes:string[];

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
  numDocument:string;

  @IsNotEmpty()
  @IsDate()
  date:Date;

  @IsOptional()
  @IsString()
  notIngredients:string[];
}
