import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  quantityOfPlates:number;

  @Column() 
  quantityOfDrinks:number;

  @Column()
  quantityOfPeoples:number;

  @Column("simple-array")
  dishes:string[];

  @Column("simple-array")
  drinks:string[];

  @Column()
  Table:string;

  @Column()
  name:string;

  @Column({nullable:true})
  idUser:string;

  @Column()
  data:Date;

  @Column()
  totalPrice:number;
}
