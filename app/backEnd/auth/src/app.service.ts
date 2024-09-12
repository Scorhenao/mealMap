import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { map } from 'rxjs';
import { errorManage } from './common/error/error.Manage';

@Injectable()
export class AppService {
  constructor(private jwtService:JwtService,
    private http:HttpService
  ){}

  returnUser(email:string,password:string){
    try{
      const dataUser= this.http.post("http://localhost:3000,user",{email:email,password:password}).
      pipe(
        map(response=>response.data)
      );
      if(!dataUser){
        throw new errorManage({
          type:"BAD_REQUEST",
          message:"El usuario debe estar en la base de datos"
        });
      }
      return dataUser;
    }catch(err:any){
      throw errorManage.errorMethod(err.message);
    }
  }


  returnToken(data:any): any{
    console.log("entramos a crear el token");
    const acces_token=this.jwtService.sign(data,{expiresIn:'20'});
    const refres_token=this.jwtService.sign(data,{expiresIn:'20d'});
    return {
      acces_token,
      refres_token
    }
  }
}
