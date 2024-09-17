import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("owners")
export class Owner {
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    business_name:string;

    @Column()
    nit:number;

    @Column()
    idUser:string;

    @OneToOne(()=>User)
    @JoinColumn({name:"idUser"})
    user:User;
}
