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

  async returnUser(userData:any){
    try{
      const dataUser=await this.http.axiosRef.post("http://localhost:3000/loginUser",userData);
      if(!dataUser.data){
        throw new errorManage({
          type:"BAD_REQUEST",
          message:"El usuario debe estar en la base de datos"
        });
      }
      return dataUser.data;
    }catch(err:any){
      throw errorManage.errorMethod(err.message);
    }
  }


  returnToken(data:any): any{
    console.log("entramos a crear el token");
    const payload={
      idUser:data.id,
      email:data.email,
      name:data.name,
      role:data.role.name
    }
    
    const acces_token=this.jwtService.sign(payload,{expiresIn:'20m'});
    const refres_token=this.jwtService.sign(payload,{expiresIn:'20d'});
    return {
      acces_token,
      refres_token
    }
  }

  async validateUser(dataUser:any){
    try{
      const requestUser=await this.http.axiosRef.post("http://localhost:3000/user",dataUser)
      console.log(requestUser);
      
      return requestUser.data;
    }catch(err:any){ 
      throw err;
    }
  }
}
