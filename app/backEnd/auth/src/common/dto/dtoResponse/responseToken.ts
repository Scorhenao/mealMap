import { ApiProperty } from "@nestjs/swagger";

export class tokenResponse{
    @ApiProperty({example:"0ed35f6b-f2dd-4911-919f-ccd57369b74e"})
    access_token:string;

    @ApiProperty({example:"0ed35f6b-f2dd-4911-919f-ccd57369b74e"})
    refresh_token:string;
}