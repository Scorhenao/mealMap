import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { roleGuard } from 'src/common/guards/guards.guard';
import { apiKeyGuard } from 'src/common/guards/apiKey.guard';
import { ErrsFilter } from 'src/common/config/exception/errs.filter';
import { OwnerModule } from 'src/owner/owner.module';
import { RoleModule } from 'src/role/role.module';
import { RoleService } from 'src/role/role.service';
import { OwnerService } from 'src/owner/owner.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  OwnerModule, RoleModule
  ],
  controllers: [UserController],
  providers: [UserService,roleGuard,apiKeyGuard,ErrsFilter,RoleService,OwnerService],
  exports:[TypeOrmModule]
  
})
export class UserModule {}
