import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, isNotEmpty, IsString } from 'class-validator';

export class loginDto {
  @ApiProperty({ example: 'riwi@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'rLwL2023.' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
