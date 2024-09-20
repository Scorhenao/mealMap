import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { createTokenDto } from './common/dto/createToken';
import { localGuard } from './guards/local.guard';
import { jwtGuard } from './guards/jwt.guard';
import { apiKeyGuard } from './guards/apiKey.guard';
import { roleGuard } from './guards/role.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //new ValidationPipe()) Data:createTokenDto
  @Post("token")
  @UseGuards(localGuard,apiKeyGuard)
  getHello(@Body() data: any,@Req() request: any){    
    return this.appService.returnToken(request.user);
  }

  @Get("renovateToken")
  @UseGuards(apiKeyGuard,jwtGuard)
  returnVerifyRole(@Req() req:any){
    try{       
      const newAccessToken=this.appService.returnToken({
        id:req.dataUser.idUser,
        name:req.dataUser.name,
        role:req.dataUser.role,
        email:req.dataUser.email
      });
      
      return newAccessToken.acces_token;
    }catch(err:any){
      console.log(err);
      
      throw err;
    }
  }
}
/*
*/ 