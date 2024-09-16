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
  @IsInt()
  quantityOfPeoples:number;

  @IsNotEmpty()
  @IsArray()
  dishes:string[];

  @IsNotEmpty()
  @IsInt()
  Table:number;

  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsString()
  numDocument:string;

  @IsNotEmpty()
  @IsDate()
  data:Date;
}
