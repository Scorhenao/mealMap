import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('allDishes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllDishes() {
    return await this.appService.getHello();
  }
}
