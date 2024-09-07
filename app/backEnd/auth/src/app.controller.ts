import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { createTokenDto } from './common/dto/createToken';
import { localGuard } from './guards/local.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseGuards(localGuard)
  getHello(@Body(new ValidationPipe()) Data:createTokenDto): string {
    return this.appService.returnToken(Data);
  }
}
