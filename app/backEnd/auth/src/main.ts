import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Permite solicitudes desde cualquier origen
    credentials: true, // Permite el envío de cookies
  });
  await app.listen(3002);
}
bootstrap();
