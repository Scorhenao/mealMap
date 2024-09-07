import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
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
  await app.listen(3000);
}
bootstrap();
