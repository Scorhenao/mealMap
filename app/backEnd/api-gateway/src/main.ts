import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configureService=app.get(ConfigService);
  app.use(cookieParser(configureService.get<string>("SIGNED_COOKIE")));
=======
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config= new DocumentBuilder()
  .setTitle("Ejemplo completo")
  .setDescription("this description is about the api")
  .setVersion("1.0")
  .addTag("gato")
  .build();
  const document= SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("swagger",app,document);
  //app.useGlobalPipes(new ValidationPipe());
>>>>>>> da0c46f65fd187ca4320a5183fc53811216b6581
  await app.listen(3000);
}
bootstrap();
