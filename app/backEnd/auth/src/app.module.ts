import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { jwtGuard } from './guards/jwt.guard';
import { APP_FILTER } from '@nestjs/core';
import { HttpFilter } from './common/config/error.exception';
import { HttpModule } from '@nestjs/axios';
import { apiKeyGuard } from './guards/apiKey.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],  
      useFactory:async(configService:ConfigService)=>({
        secret:configService.get<string>("SECRET_JWT") ,
      })
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    jwtGuard,
    ConfigService,
    apiKeyGuard,
    {
      provide:APP_FILTER,
      useClass:HttpFilter
    }
  ],
})
export class AppModule {}
