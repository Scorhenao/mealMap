import { Body, Controller, Get, Param, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { createTokenDto } from './common/dto/createToken';
import { localGuard } from './guards/local.guard';
import { jwtGuard } from './guards/jwt.guard';
import { apiKeyGuard } from './guards/apiKey.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("token")
  @UseGuards(apiKeyGuard,jwtGuard,localGuard)
  getHello(@Body(new ValidationPipe()) Data:createTokenDto, @Req() request:any){
    if(request.validationToken){
      return this.appService.returnToken(Data);
    }else{
      return true;
    }
  }
  

  @Get("verifyRole/:Role/:Role2")
  @UseGuards(jwtGuard,apiKeyGuard)
  returnVerifyRole(@Param("Role") role:string, @Param("Role2") role2:string,@Req() req:any){
    try{
      this.appService.validateRoles(req.user,[role,role2]);
    }catch(err:any){
      throw err;
    }
  }
}
/*
*/ 