import { ApiProperty } from '@nestjs/swagger';
import { ingredientDto } from '../dtoOnetoOne.ts/dtoIngredient';

export class createOrderDto {
  @ApiProperty({ example: 'bandeja' })
  dishes: string;

  @ApiProperty({ type: [ingredientDto] })
  ingredients: ingredientDto[];

  @ApiProperty({ example: 'cocacola' })
  drink: string;

  @ApiProperty({ example: 3 })
  quantityPeople: number;

  @ApiProperty({ example: 'pedro' })
  name: string;

  @ApiProperty({ example: 14000 })
  price: number;
}
