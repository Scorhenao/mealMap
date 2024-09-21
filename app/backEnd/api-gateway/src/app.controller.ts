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
import { REQUEST } from '@nestjs/core';

@UseFilters(HttpExceptioManage)
@Controller()
export class AppController implements handleMicroservices {
  constructor(@Inject() private httpService: HttpService,private configService:ConfigService) {}

  @Post("user")
  async returnCreateUser(@Body() dataUser:any){
    try{     
      const data=await this.httpService.axiosRef.post("http://localhost:3003/user",dataUser);
      return data.data;
    }catch(err:any){        
      throw new errorManage({
        type:err.response.data.status,
        message:err.response.data.message 
      });
    }
  }

  @Get("allUsers")
  @UseGuards(guardJwt)
  async returnAllUsers() {
    const allUser=await this.httpService.axiosRef
      .get('http://localhost:3001/users');
    return allUser.data;
  }


  @Get("user")
  @UseGuards(guardJwt)
  async returnUser(@Req() request:any){
    try{     
      const oneUser=await this.httpService.axiosRef.get("http://localhost:3003/user/"+request.decode.idUser);
      return oneUser.data;
    }catch(err:any){
      throw new errorManage({
        type:err.response.data.status,
        message:err.response.data.message
      });
    }
  }


  @Post("Ingredient")
  @UseGuards(guardJwt)
  async createIngredient(@Body() dataIngredient:any,@Req() request:any){
    try{
      const data = await this.httpService.axiosRef.post("http://localhost:8080/ingredient",dataIngredient,{
        headers:{
          withCredentials: true,
          "X-Api-Key":this.configService.get<string>("API_KEY"),
          "X-Role":request.decode.role
        }
      });
      return data;
    }catch(err:any){
      throw new err;
    }
  }


  @Post("Dish")
  @UseGuards(guardJwt)
  async createDish(@Body() dataDish:any,@Req() request:any){
    try{
      const data = await this.httpService.axiosRef.post("http://localhost:8080/dish",dataDish,{
        headers:{
          withCredentials: true,
          "X-Api-Key":this.configService.get<string>("API_KEY"),
          "X-Role":request.decode.role
        }
      });
      return data;
    }catch(err:any){
      throw new err;
    }
  }



  @Post("login")
  async returnJwt(@Body() datos:any, @Res() response2:Response){
    try{      
      console.log("enter");
      
    const request=await this.httpService.axiosRef.post("http://localhost:3002/token",datos,{
      withCredentials:true,
      headers:{
        "X-Api-Key":this.configService.get<string>("API_KEY")
      }
    });
    response2.cookie("token2",request.data.acces_token,{
      httpOnly:true,
      signed:true
    })
    
    response2.cookie("tokenRefresh",request.data.refres_token,{
      httpOnly:true,
      signed:true
    });
    
    response2.status(200).json(true);


    }catch(err:any){

      throw errorManage.createSignatureError(err.response.data.message);
    }
}



  @Get("ingredients")
  @UseGuards(guardJwt)
  returnAllIngredients(@Req() request:any){
    try{
      const peticion=this.httpService.axiosRef.get("http://localhost:8080/ingredient",{
        withCredentials:true,
        headers:{
          "X-Role":request.decode.role
        }
      });

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


    @Post('loginUser')
  async returnOneUser(@Body() dataUser:any) {
    try {     
      let data = await this.httpService.axiosRef
        .post('http://localhost:3003/user/userOne',dataUser,{
          withCredentials: true,
          headers: {
            "X-Api-Key": this.configService.get<string>("API_KEY"),
          },
        })
        return data.data;
    } catch (err: any) {   
      
      console.log(err.response.data);
      
      throw errorManage.createSignatureError(err.response.data.message);
    }
  }

  

  @Post("orders")
  @UseGuards(guardJwt)
  async createOrder(@Body() dats:any,@Req() request2:any,@Res() response:Response){
    try{ 
      
      // const returnTable=await this.httpService.axiosRef.post("http://localhost:8080",dats.quantityPeople);


      const request=await this.httpService.axiosRef.post("http://localhost:3001/orders",{
        ...request2.decode,
        ...dats,
        //...returnTable.data
      },{
        withCredentials:true,
        headers:{
          "X-Api-Key":this.configService.get<string>("API_KEY")
        }
      });
      
      response.json(request.data);
    }catch(err:any){        
      throw new errorManage({
        type:err.response.data.status,
        message:err.response.data.message
      });
    }
  }


  
  @Get("ordersToday")
  @UseGuards(guardJwt)
  async getOrdersToday(@Req() request2:any,@Res() response:Response){
    try{  

      const request=await this.httpService.axiosRef.get("http://localhost:3001",{
        withCredentials:true,
        headers:{
          "X-Api-Key":this.configService.get<string>("API_KEY"),
          "X-role":request2.decode.role
        }
      });
     
      response.json(request.data);
    }catch(err:any){   
      throw new errorManage({
        type:err.response.data.status,
        message:err.response.data.message
      });
    }
  }


  // @Post("notifyOrder")
  // async giveDishesOrders(){
  //   try{
  //     await this.httpService.axiosRef.post("http://localhost:8080/dihesOrders"{

  //     })
  //   }catch(err:any){

  //   }
  // }


  @Patch()
  @UseGuards(guardJwt)
  updateUser(@Body() data: Partial<User>, @Req() request:any) {
   try{
    const dataReturn= this.httpService.axiosRef
    .patch(`http://localhost:3003/user/${request.decode.idUser}`, data)
   }catch(err:any){
    throw new errorManage({
      type:err.response.data.statusCode,
      message:err.response.data.message
    });
   }
  }

  @Delete("user")
  @UseGuards(guardJwt)
  deleteUser(@Req() request:any) {
    try{
      const dataDelete= this.httpService.axiosRef
      .delete(`http://localhost:3003/user/${request.decode.idUser}`);
    }catch(err:any){

    }
  }



}
