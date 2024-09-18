import { SetMetadata } from '@nestjs/common';


export const KEY_VALUE="juan";
export const roles = (...roles: string[]) => SetMetadata(KEY_VALUE, roles);
