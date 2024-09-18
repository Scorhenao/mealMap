import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { erroManage } from 'src/common/config/err/err.manage';

@Injectable()
export class OwnerService {
  constructor(@InjectRepository(Owner) private ownerRepository:Repository<Owner>){}
  async create(createOwnerDto: CreateOwnerDto) {
    try{
      const data=this.ownerRepository.create(createOwnerDto);
      await this.ownerRepository.save(data);
      return data;
    }catch(err:any){
      console.log(err.response);
      
      throw new erroManage({
        type:err.status,
        message:"hola estas mal"
      });
    }
  }

  findAll() {
    return `This action returns all owner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
