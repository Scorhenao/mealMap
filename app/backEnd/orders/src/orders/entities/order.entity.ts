import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  idUser: string;

  @Column()
  idTable: number;

  @Column('simple-array')
  dishes: number[];
}
