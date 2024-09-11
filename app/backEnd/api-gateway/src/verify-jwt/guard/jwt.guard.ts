import { CanActivate, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class guardJwt extends AuthGuard('jwt') {}
