import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { erroManage } from 'src/common/config/err/err.manage';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepository:Repository<Owner>,
  ){}

  async create(createOwner: CreateOwnerDto) {
    try{

      console.log("entro al servicio");
      
      if(!createOwner.business_name){
        throw new erroManage({
          type:"BAD_REQUEST",
          message:"all properties are required"
        });
      }
      const data=this.ownerRepository.create({business_name:createOwner.business_name,idUser:createOwner.idUser});

      await this.ownerRepository.save(data);
      return data;
    }catch(err:any){ 
      console.log(err);

      throw err;
    }
  }

  async update(id: string, updateOwnerDto: UpdateOwnerDto) {
    try{
     return await this.ownerRepository.update({id:id},updateOwnerDto);
    }catch(err:any){
      throw new err;
    }
  }

}
