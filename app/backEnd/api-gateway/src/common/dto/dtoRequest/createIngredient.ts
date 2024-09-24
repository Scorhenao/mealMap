import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createIngredientDto {
  @ApiProperty({ example: 'arroz' })
  @IsNotEmpty()
  @IsString()
  nameIngredient: string;

  @ApiProperty({ example: 2000 })
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
