import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":entitie/:role")
  getHello(@Param("entitie") entitie:string, @Param("role") role:string){
    return this.appService.getHello(entitie,role);
  }
}
