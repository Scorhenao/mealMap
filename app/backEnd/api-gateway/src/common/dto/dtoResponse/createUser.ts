import { ApiProperty } from '@nestjs/swagger';

export class createUserResponse {
  @ApiProperty({ example: '0ed35f6b-f2dd-4911-919f-ccd57369b74e' })
  id: string;

  @ApiProperty({ example: 'juan' })
  name: string;

  @ApiProperty({ example: 'juan@gmail.com' })
  email: string;

  @ApiProperty({ example: 'juan123' })
  password: string;

  @ApiProperty({ example: 1 })
  roleId: number;
}
