import { Injectable, UseFilters } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { erroManage } from 'src/common/config/err/err.manage';
import { ErrsFilter } from 'src/common/config/exception/errs.filter';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  
  async create(createUserDto: CreateUserDto) {
    try{

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

  async findOne(name: any) {   
    try{
      const dataUser= await this.userRepository.findOne({where:{email:name.email}});

      const verify=await bcrypt.compare(name.password,dataUser.password);
      console.log(verify);
      
      console.log(dataUser);
      
      if(!dataUser || !await bcrypt.compare(name.password,dataUser.password)){
        throw new erroManage({
          type:"NOT_FOUND",
          message:"INcorrect Credenctials"
        });
      }
      console.log("pasamos");
      
      return dataUser;
    }catch(err:any){
      throw erroManage.signatureError(err.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({id:id},updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
