import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  quantityOfPlates:number;

  @Column() 
  quantityOfDrinks:number;

  @Column("simple-array")
  dishes:string[];

  @Column()
  idTable:number;

  @Column()
  name:string;

  @Column() 
  apellido:string;

  @Column()
  data:Date;
}
