import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from './entitie/permission.entity';
import { typeOrmConfig } from './config/db.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:".env"
    }),
    TypeOrmModule.forFeature([Permission]),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useClass:typeOrmConfig
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
