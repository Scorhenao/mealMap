import { Permission } from "src/entitie/permission.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";


export class seederPermission implements Seeder{
    async run(dataSource: DataSource): Promise<any> {
        const permissionRepository=dataSource.getRepository(Permission);
        const valuesPermissions=[
            {
                nameService:"order",
                nameRole:"client",
                canCreate:true,
                canUpdate:false,
                canDelete:false,
                canGet:false
            },
            {
                nameService:"order",
                nameRole:"admin",
                canCreate:true,
                canUpdate:true,
                canDelete:true,
                canGet:true
            },
            {
                nameService:"inventory",
                nameRole:"client",
                canCreate:false,
                canUpdate:false,
                canDelete:false,
                canGet:false
            },
            {
                nameService:"inventory",
                nameRole:"admin",
                canCreate:true,
                canUpdate:true,
                canDelete:true,
                canGet:true
            },
            {
                nameService:"user",
                nameRole:"client",
                canCreate:false,
                canUpdate:true,
                canDelete:true,
                canGet:true
            },
            {
                nameService:"user",
                nameRole:"admin",
                canCreate:true,
                canUpdate:true,
                canDelete:true,
                canGet:true
            }
        ];

        for(let value of valuesPermissions){
            const verify=await permissionRepository.findOne({where:{nameService:value.nameService}});
            if(!verify){
                const createPermission=permissionRepository.create(value);
                permissionRepository.save(createPermission);
            }
        }
    }
}