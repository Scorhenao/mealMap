import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @ApiProperty({ example: 'pedro' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'riwi@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'rLwL2023.' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  @IsNotEmpty()
  role: string;
}
