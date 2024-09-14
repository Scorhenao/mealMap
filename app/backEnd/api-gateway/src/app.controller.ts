import { HttpService } from '@nestjs/axios';
import {
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  Inject,
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
  @Get('user')
  @UseGuards(guardJwt)
  returnOneUser(): Observable<User> {
    try {
      let data = this.httpService
        .get('http://localhost:3001')
        .pipe(map((response) => response.data));
      data = null;
      if (!data) {
        throw new errorManage({
          type: 'BAD_REQUEST',
          message: 'The user not found',
        });
      }
      return data;
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
      console.log("entramos");
      
    const request=this.httpService.post("http://localhost:3005/token",datos,{
      withCredentials:true,
      headers:{
        "api-key":this.configService.get<string>("API_KEY")
      }
    })
    .pipe(map(response=>response.data));

    const token=await  lastValueFrom(request);
      
    console.log("peticion finisihed");
    console.log(token);
    
    
    response2.cookie("token2",token.acces_token)
    
    response2.cookie("tokenRefresh",token.refres_token);
    
    response2.json(token);

    }catch(err:any){
      
      throw new errorManage({
        type:"BAD_REQUEST",
        message:err.message
      });

    }
}

    @Post("verifyRole")
    @UseFilters(HttpExceptioManage)
    async verifyJwt(@Body() roles:any, @Res() response2:Response,@Req() request2:Request){
      try{
      const token2=request2.signedCookies["token2"];
      const tokenRefresh=request2.signedCookies["refreshToken"];
      console.log(roles);
      
      const request=this.httpService.get("http://localhost:3005/verifyRole/"+roles.uno+"/"+roles.dos,{
        withCredentials:true,
        headers:{
          "Authorization":"Bearer "+token2.token_access,
          "api-key":this.configService.get<string>("API_KEY")
        }
      })
      .pipe(map(response=>response.data));
  
      const token=await  lastValueFrom(request);
         
      response2.cookie("token",token,{
        signed:true,
        httpOnly:true
      });
      
      response2.json(token);
      
      }catch(err:any){
        
        throw new errorManage({
          type:"BAD_REQUEST",
          message:err.response.data
        });
  
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

  @Get("orders")
  //@UseGuards(guardJwt)
  createOrder(@Body() data:any){
    try{
      const request=this.httpService.post("http://localhost:3004/orders",data)
      .pipe(map(response=>response.data));
      if(!request){
        throw new errorManage({
          type:"BAD_REQUEST",
          message:"The order not was created"
        })
      }
      return request;

    }catch(err:any){
      throw errorManage.createSignatureError(err.message);
    }
  }

  @Get()
  returnAllOrders() {}


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