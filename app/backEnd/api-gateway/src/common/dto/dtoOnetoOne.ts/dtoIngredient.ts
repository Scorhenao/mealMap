import { ApiProperty } from '@nestjs/swagger';

export class ingredientDto {
  @ApiProperty({ example: 'arroz' })
  name: string;
}
