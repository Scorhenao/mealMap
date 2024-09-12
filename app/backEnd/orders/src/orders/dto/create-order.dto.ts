import { IsArray, IsDate, IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';
import { idText } from 'typescript';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsInt()
  quantityOfPlates:number;

  @IsNotEmpty()
  @IsInt()
  quantityOfDrinks:number;

  @IsNotEmpty()
  @IsArray()
  dishes:string[];

  @IsNotEmpty()
  @IsInt()
  idTable:number;

  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsString()
  apellido:string;

  @IsNotEmpty()
  @IsDate()
  data:Date;
}
