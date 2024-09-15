import { Body, Controller, Get, Param, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { createTokenDto } from './common/dto/createToken';
import { localGuard } from './guards/local.guard';
import { jwtGuard } from './guards/jwt.guard';
import { apiKeyGuard } from './guards/apiKey.guard';
import { roleGuard } from './guards/role.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("token")
  @UseGuards(apiKeyGuard,localGuard)
  getHello(@Req() request:any){
    return this.appService.returnToken(request.user);
  }

  @Get("verifyToken")
  @UseGuards(apiKeyGuard,jwtGuard,roleGuard)
  returnVerifyRole(@Req() req:any){
    try{
      console.log("entramos aca en la valdacion del token");
      console.log("La respuesta es ");
      
      // this.appService.validateRoles(req.user,[role,role2]);
    }catch(err:any){
      throw err;
    }
  }
}
/*
*/ 