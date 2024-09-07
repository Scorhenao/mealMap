import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { jwtGuard } from './guards/jwt.guard';
import { APP_FILTER } from '@nestjs/core';
import { HttpFilter } from './common/config/error.exception';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:async(configService:ConfigService)=>({
        secret:configService.get<string>("SECRET_JWT") ,
        signOptions:{expiresIn:'1h'} 
      })
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    jwtGuard,
    {
      provide:APP_FILTER,
      useClass:HttpFilter
    }
  ],
})
export class AppModule {}
