import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { errorManage } from 'src/common/error/error.Manage';

@Injectable()
export class apiKeyGuard implements CanActivate {
  constructor(private configService:ConfigService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    console.log("llegamos al apikey");
    const request=context.switchToHttp().getRequest();
    const apiKey=request.headers["x-api-key"];
    
    try{    
    if(!apiKey || apiKey !== this.configService.get<string>("API_KEY")){    
      throw new errorManage({
        type:"SERVICE_UNAVAILABLE",
        message:"api key not found"
      });
    }
    return true;
    }catch(err:any){
      throw errorManage.errorMethod(err.message);
    }
  }
}
