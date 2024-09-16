import { SetMetadata } from '@nestjs/common';


export const KEY_VALUE="roles";
export const role = (...roles: string[]) => SetMetadata(KEY_VALUE, roles);
