import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class createTokenDto{
        
    @ApiProperty({example:"riwi@gmail.com"})
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty({example:"rLwL2023."})
    @IsString()
    @IsNotEmpty()
    password:string;
}