import { Role } from 'src/role/entities/role.entity';
import { DataSource } from 'typeorm';
import {Seeder, SeederFactoryManager} from 'typeorm-extension';



export class seedRole implements Seeder{
    async run(dataSource: DataSource): Promise<any> {
        const roleRepo=dataSource.getRepository(Role);
        const data=[
            {
                name:"client"
            },
            {
                name:"admin"
            },
            {
                name:"owner"
            }
        ];
        for(let role of data){
            let query= await roleRepo.findOne({where:{name:role.name}});
            if(!query){
                const dataRole=roleRepo.create(role);
                await roleRepo.save(dataRole);
            }
        }
    }
}