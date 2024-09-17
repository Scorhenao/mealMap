import { Injectable, UseFilters } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { erroManage } from 'src/config/err/err.manage';
import { ErrsFilter } from 'src/config/exception/errs.filter';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  
  async create(createUserDto: CreateUserDto) {
    try{
      throw new erroManage({
        type:"BAD_REQUEST",
        message:"malo"
      });
      const dataUser=this.userRepository.create(createUserDto);
    await this.userRepository.save(createUserDto);
    return dataUser;
    }catch(err:any){
      throw erroManage.signatureError(err.message);
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(name: string) {   
    return await this.userRepository.findOne({where:{name:name}});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({id:id},updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
