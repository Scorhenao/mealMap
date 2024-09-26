import { HttpService } from '@nestjs/axios';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { errorManage } from 'src/common/config/error.manage';

@Injectable()
export class guardJwt implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    

    const res: Response = context.switchToHttp().getResponse();
    
    const tokenAccess = req.signedCookies['token2'];
    const tokenRefresh = req.signedCookies['tokenRefresh'];
  
    console.log(tokenAccess);
    
    try {
      this.jwtService.verify(tokenAccess, { ignoreExpiration: false });

      const tokenDecode = this.jwtService.decode(tokenAccess);

      req.decode = tokenDecode;
      return true;
    } catch (err: any) {            
      if (err.message == 'jwt expired') {
        console.log('entramos al flujo deseado');
        const newAcessToken = await this.httpService.axiosRef.get(
          'http://localhost:3002/renovateToken',
          {
            withCredentials: true,
            headers: {
              Authorization: 'Bearer ' + tokenRefresh,
              'X-Api-Key': this.configService.get('API_KEY'),
            },
          },
        );

        res.cookie('token2', newAcessToken.data, {
          httpOnly: true,
          signed: true,
        });
        const tokenDecode = this.jwtService.decode(newAcessToken.data);

        req.decode = tokenDecode;

        return true;
      } else {
console.log("paila no esta");

        throw new errorManage({
          type: err.response.data.status,
          message: err.response.data.message,
        });
      }
    }
  }
}
