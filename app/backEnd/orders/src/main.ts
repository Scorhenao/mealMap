import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dishesSeed } from './config/seeds/seed.typeDishes';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource=app.get(DataSource);
  const seederTypes=new dishesSeed();
  await seederTypes.seed(dataSource);
  await app.listen(3000);
}
bootstrap();
