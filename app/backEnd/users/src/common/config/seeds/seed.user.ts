import { User } from "src/user/entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import * as bcrypt from 'bcrypt';

export class seedUser implements Seeder{
    async run(dataSource: DataSource): Promise<any> {
        const userRepo=dataSource.getRepository(User);
        const dataUsers=[
            {
                name:"pedro",
                email:"pedro@gmail.com",
                password:"pedro12",
                roleId:1
            },
            {
                name:"juan",
                email:"juan@gmail.com",
                password:"juan12",
                roleId:2
            },
            {
                name:"jesus",
                email:"jesus@gmail.com",
                password:"jesus12",
                roleId:3
            }
        ]

        for(let user of dataUsers){
            let query= await userRepo.findOne({where:{email:user.email}});
            if(!query || !await bcrypt.compare(user.password,query.password) ){
                console.log("se creo el usuario");
                
                const encrypPassword=await bcrypt.hash(user.password,10);
                const dataUser=userRepo.create({...user,password:encrypPassword});
                await userRepo.save(dataUser);
            }else{
                console.log("no se creo el usuario");
            }
        }
    }
}