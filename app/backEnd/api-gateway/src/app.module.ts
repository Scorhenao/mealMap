import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './verify-jwt/strategy/jwt.strategy';
import { guardJwt } from './verify-jwt/guard/jwt.guard';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  //providers:[JwtStrategy,guardJwt],
  controllers: [AppController],
})
export class AppModule {}
