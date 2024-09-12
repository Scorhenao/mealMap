import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class createTokenDto{
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @IsString()
    password:string;
}