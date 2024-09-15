import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './entitie/permission.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Permission) private permissionRepository:Repository<Permission>){}

  async getHello(service:string,role:string){
    const permissio=await this.permissionRepository.findOne({where:{nameService:service,nameRole:role}});
    return permissio;
    }catch(err:any){
      throw new Error(err);
    }
}

