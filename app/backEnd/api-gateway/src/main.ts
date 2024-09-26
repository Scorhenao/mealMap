import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configureService = app.get(ConfigService);
  app.use(cookieParser(configureService.get<string>('SIGNED_COOKIE')));

  app.enableCors({
    origin: 'http://localhost:3004', 
    credentials: true, 
  });

  const config = new DocumentBuilder()
    .setTitle('Api Gateway')
    .setDescription('')
    .setVersion('1.0')
    .addCookieAuth('access-token-cookie', {
      type: 'apiKey',
      in: 'cookie',
      name: 'token',
    })
    .addCookieAuth('refresh-token-cookie', {
      type: 'apiKey',
      in: 'cookie',
      name: 'tokenRefresh',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
