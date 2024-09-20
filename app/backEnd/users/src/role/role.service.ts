import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private roleRepository:Repository<Role>){}
  
  async create(createRoleDto: CreateRoleDto) {
    const dataRole=this.roleRepository.create(createRoleDto);
    await this.roleRepository.save(dataRole);
    return dataRole;
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(name:string) {
   try{
    return await this.roleRepository.findOne({where:{name:name}});
   }catch(err:any){
    throw new err;
   }
  }

  async remove(id:number){
    await this.roleRepository.delete(id);
  }
}
