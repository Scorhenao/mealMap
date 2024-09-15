import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { seederPermission } from './config/seed/seed.permission';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource=app.get(DataSource);
  const seedPermision=new seederPermission();
  await seedPermision.run(dataSource);
  app.enableCors();
  await app.listen(3007);
}
bootstrap();
