import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrsFilter } from './common/config/exception/errs.filter';
import { DataSource } from 'typeorm';
import { seedRole } from './common/config/seeds/seed.role';
import { seedUser } from './common/config/seeds/seed.user';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource=app.get(DataSource);
  const seedRol=new seedRole();
  const seedUse=new seedUser();

  app.enableCors({
    origin: 'http://localhost:3000', 
    credentials: true, 
  });
  
  await seedRol.run(dataSource);
  await seedUse.run(dataSource);
  app.useGlobalFilters(new ErrsFilter());
  await app.listen(3003);
}
bootstrap();
