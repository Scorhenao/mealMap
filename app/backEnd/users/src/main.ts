import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrsFilter } from './config/exception/errs.filter';
import { DataSource } from 'typeorm';
import { seedRole } from './config/seeds/seed.role';
import { seedUser } from './config/seeds/seed.user';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource=app.get(DataSource);
  const seedRol=new seedRole();
  const seedUse=new seedUser();

  await seedRol.run(dataSource);
  await seedUse.run(dataSource);
  app.useGlobalFilters(new ErrsFilter());
  await app.listen(5000);
}
bootstrap();
