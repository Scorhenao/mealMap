import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("permission")
export class Permission {
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column()
    nameService:string;

    @Column()
    nameRole:string;

    @Column()
    canCreate:boolean;
 
    @Column()
    canUpdate:boolean;

    
    @Column()
    canDelete:boolean;

    
    @Column()
    canGet:boolean;
}