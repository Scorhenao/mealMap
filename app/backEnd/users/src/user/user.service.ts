import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
 
  async create(createUserDto: CreateUserDto) {
    const dataUser=this.userRepository.create(createUserDto);
    await this.userRepository.save(createUserDto);
    return dataUser;
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
