import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { localGuard } from './guards/local.guard';
import { jwtGuard } from './guards/jwt.guard';
import { apiKeyGuard } from './guards/apiKey.guard';
import { roleGuard } from './guards/role.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { createTokenDto } from './common/dto/dtoRequest/createToken';
import { tokenResponse } from './common/dto/dtoResponse/responseToken';


@ApiTags("auth")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  //new ValidationPipe()) Data:createTokenDto
  @Post("token")
  @ApiBody({type:createTokenDto})
  @ApiOkResponse({
    description:"creation token",
    type:tokenResponse
  })
  @UseGuards(localGuard,apiKeyGuard)
  getHello(@Body() data: any,@Req() request: any){    
    return this.appService.returnToken(request.user);
  }

  @Get("renovateToken")
  @ApiBearerAuth()
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