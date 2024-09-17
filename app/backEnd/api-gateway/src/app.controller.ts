import { HttpService } from '@nestjs/axios';
import {
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { lastValueFrom, map, Observable } from 'rxjs';
import { guardJwt } from './verify-jwt/guard/jwt.guard';
import { handleMicroservices } from './interfaces/interface.api-gateway';
import { errorManage } from './common/config/error.manage';
import { HttpExceptioManage } from './common/err/exception.fiulter';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController implements handleMicroservices {
  constructor(@Inject() private httpService: HttpService,private configService:ConfigService) {}

  @UseFilters(HttpExceptioManage)
  @Post('user')
  returnOneUser(@Body() dataUser:any): any {
    try {
      console.log("entramos a user");
      
      let data = this.httpService
        .post('http://localhost:3001/user',dataUser)
        .pipe(map((response) => response.data));
        const userPrueba={
          email:"jhonatan@gmail.com",
          password:"jhona123",
          role:"client",
          name:"jhonatan"
        }
        return userPrueba;
    } catch (err: any) {
      throw errorManage.createSignatureError(err.message);
    }
  }

  @Get("allUsers")
  @UseGuards(guardJwt)
  returnAllUsers(): Observable<User[]> {
    return this.httpService
      .get('http://localhost:3001/users')
      .pipe(map((response) => response.data));
  }


  @Post("token")
  @UseFilters(HttpExceptioManage)
  async returnJwt(@Body() datos:any, @Res() response2:Response){
    try{   
      console.log("the api key is ");
      console.log(this.configService.get<string>("API_KEY"));
      
      
    const request=await this.httpService.axiosRef.post("http://localhost:3008/token",datos,{
      withCredentials:true,
      headers:{
        "X-Api-Key":this.configService.get<string>("API_KEY")
      }
    })

    console.log(request.data);
    
    response2.cookie("token2",request.data.acces_token,{
      httpOnly:true,
      signed:true
    })
    
    response2.cookie("tokenRefresh",request.data.refres_token,{
      httpOnly:true,
      signed:true
    });
    
    response2.json("todo dalio perfecto");


    }catch(err:any){
      
      throw new errorManage({
        type:"BAD_REQUEST",
        message:err.message
      });

    }
}

    @Get("verifyRole")
    @UseFilters(HttpExceptioManage)
    async verifyJwt(@Res() response2:Response,@Req() request2:Request){
      try{
   console.log("entramos a verificar el role");
   
      console.log(request2.headers);
      
      const request=await this.httpService.axiosRef.get("http://localhost:3008/verifyToken",{
       withCredentials:true,
        headers:{
          "Authorization":"Bearer "+request2.headers["x-access-token"],
          "X-Refresh-Token":request2.headers["x-refresh-token"],
          "X-Api-Key":this.configService.get<string>("API_KEY"),
          "X-Service":request2.headers["x-service"]
        }
      });
      
      console.log("la respuesta es ");
      console.log(request.data);
      
      
      const token=request.data;
         
      // response2.cookie("token",token,{
      //   signed:true,
      //   httpOnly:true
      // });
      
      response2.json(token);

      }catch(err:any){
        console.log("entramos el error");
        
        throw new errorManage({
          type:"BAD_REQUEST",
          message:err.response.data
        });
        throw errorManage.createSignatureError(err.message);
      }
}


  @Get()
  returnAllIngredients(){
    try{
      const peticion=this.httpService.get("http://localhost:3001/ingredient")
      .pipe(map(response=>response.data));
      if(!peticion){
        throw new errorManage({
          type:"BAD_REQUEST",
          message:"There is not ingredients"
        });
      }
      return peticion;
    }catch(err:any){
      throw errorManage.createSignatureError(err.message);
    }
  }

  

  @Post("orders")
  @UseFilters(HttpExceptioManage)
  @UseGuards(guardJwt)
  async createOrder(@Body() dats:any,@Req() request2:any,@Res() response:Response){
    try{  

      const returnTable=await this.httpService.axiosRef.post("http://localhost:8080",dats.quantityPeople);


      const request=await this.httpService.axiosRef.post("http://localhost:3004/orders",{
        ...request2.decode,
        ...dats,
        ...returnTable.data
      },{
        withCredentials:true,
        headers:{
          "X-Api-Key":this.configService.get<string>("API_KEY")
        }
      });
      response.json(request.data);
    }catch(err:any){   
      throw new errorManage({
        type:err.response.data.statusCode,
        message:err.response.data.message
      });
    }
  }

  @Get("permission/:service/:role")
 async returnPermission(@Param("service") service:string, @Param("role") role:string){
    try{
      const permission=await this.httpService.axiosRef.get(`http://localhost:3007/${service}/${role}`);
      return permission.data;
    }catch(err:any){
    }
  }


  @Post()
  sendNewUser(@Body() dataNewUser: User): Observable<User> {
    return this.httpService
      .post('http://localhost:3001/user', dataNewUser)
      .pipe(map((response) => response.data));
  }

  @Patch()
  updateUser(data: Partial<User>): Observable<User> {
    return this.httpService
      .patch('http://localhost:3001/user', data)
      .pipe(map((response) => response.data));
  }

  @Delete()
  deleteUser(id: string): Observable<true> {
    return this.httpService
      .delete('http://localhost:3001/user')
      .pipe(map((response) => response.data));
  }


}
