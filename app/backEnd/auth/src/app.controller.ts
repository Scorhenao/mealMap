import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { createTokenDto } from './common/dto/createToken';
import { localGuard } from './guards/local.guard';
import { jwtGuard } from './guards/jwt.guard';
import { apiKeyGuard } from './guards/apiKey.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("token")
  //@UseGuards(localGuard)
  @UseGuards(apiKeyGuard)
  getHello(@Body(new ValidationPipe()) Data:createTokenDto): string {
    console.log("creamos el token");
    
    return this.appService.returnToken(Data);
  }

  @Get("verifyToken")
  @UseGuards(jwtGuard)
  @UseGuards(apiKeyGuard)
  returnResponseToken(@Req() user:any){
    console.log(user.user);
    
    return "esta melo";
  }
}
/*
*/ 