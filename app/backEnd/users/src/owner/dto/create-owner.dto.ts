import { IsNotEmpty, IsString } from "class-validator";


export class CreateOwnerDto {
    @IsNotEmpty()
    @IsString()
    business_name:string;

    @IsNotEmpty()
    @IsString()
    idUser:string;
}
