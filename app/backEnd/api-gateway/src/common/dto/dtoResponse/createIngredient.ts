import { ApiProperty } from '@nestjs/swagger';
import { createIngredientDto } from '../dtoRequest/createIngredient';

export class ingredientResponse extends createIngredientDto {
  @ApiProperty()
  id: string;
}
