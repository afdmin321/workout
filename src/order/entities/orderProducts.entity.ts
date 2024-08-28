import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Orders } from './orders.entity';

@Entity()
export class OrderProducts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link: string;

  @ManyToOne((_) => Orders, (orders) => orders.products)
  @JoinColumn({ name: 'order_id' })
  order: Orders;
}
