import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { guardJwt } from './verify-jwt/guard/jwt.guard';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CachingModule } from './caching/caching.module';
import { WebSocketGatewayModule } from './web-socket-gateway/web-socket-gateway.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';

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
    CachingModule,
    WebSocketGatewayModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configureService: ConfigService) => ({
        secret: configureService.get('SECRET_JWT'),
      }),
    }),
  ],
  providers: [guardJwt],
  controllers: [AppController],
})
export class AppModule {}
