import { Injectable, UseFilters } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { erroManage } from 'src/common/config/err/err.manage';
import { ErrsFilter } from 'src/common/config/exception/errs.filter';
import * as bcrypt from 'bcrypt';
import { OwnerService } from 'src/owner/owner.service';
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>,
  private ownerService:OwnerService,
  private roleService:RoleService
  ){}
  
  async create(createUser: CreateUserDto) {
    try{
      const roleId=await this.roleService.findOne(createUser.role);
      const hassPasssword=await bcrypt.hash(createUser.password,10);

      const dataUser=this.userRepository.create({
        name:createUser.name,
        email:createUser.email,
        password:hassPasssword,
        roleId:roleId.id
      });
      
      await this.userRepository.save(dataUser);

      if(createUser.role=="owner"){
        return await this.ownerService.create({idUser:dataUser.id, business_name:createUser.business_name});
      }
      return dataUser;

    }catch(err:any){
      console.log(err);
      
      throw erroManage.signatureError(err.message);
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(name: any) {   
    try{ 
      const dataUser= await this.userRepository.findOne({where:{email:name.email}}); 
      console.log("la respuesta es");
        console.log(dataUser);
        
      if(!dataUser || !await bcrypt.compare(name.password,dataUser.password)){
        console.log("paila");
        
        throw new erroManage({
          type:"NOT_FOUND",
          message:"Incorrect Credenctials"
        });
      }    
      return dataUser;
    }catch(err:any){    
      console.log("entramos de una vez");
           
      throw erroManage.signatureError(err.message);
    }
  }

  async findOne2(id:string){
    try{    
      const user=await this.userRepository.findOne({where:{id:id}});
      if(!user){
        throw new erroManage({
          type:"BAD_REQUEST",
          message:"The id user incorrect"
        });
      }
      return user;
    }
    catch(err:any){
      throw erroManage.signatureError(err.message);
    }
  }

  async update(id: string, updateUser: UpdateUserDto) {
    if(updateUser.password){
      const hassPasssword=await bcrypt.hash(updateUser.password,10);
      updateUser.password=hassPasssword;
    }
    return await this.userRepository.update({id:id},{...updateUser});
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}
