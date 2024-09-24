import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createDishDto {
  @ApiProperty({ example: 'bandeja paisa' })
  @IsNotEmpty()
  @IsString()
  nameDish: string;

  @ApiProperty({ example: 'arroz,chicharron,frijoles' })
  @IsNotEmpty()
  @IsArray()
  ingredients: string[];

  @ApiProperty({ example: '13.000' })
  @IsNotEmpty()
  @IsNumber()
  priceDish: number;
}
