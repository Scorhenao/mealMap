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
          message:"user not found"
        });
      }
      return dataUser.data;
    }catch(err:any){
      console.log("entramos al errror");
      
      console.log(err);
      
      throw errorManage.errorMethod(err.response.data.message);
    }
  }


  returnToken(data:any): any{
    console.log("entramos a crear el token");
    const payload={
      idUser:data.id,
      email:data.email,
      name:data.name,
      role:data.role.name ? data.role.name : data.role
    }
  
    const acces_token=this.jwtService.sign(payload,{expiresIn:'30m'});
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
