import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { roleGuard } from 'src/common/guards/guards.guard';
import { apiKeyGuard } from 'src/common/guards/apiKey.guard';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService,roleGuard,apiKeyGuard],
  exports:[TypeOrmModule]
  
})
export class UserModule {}
