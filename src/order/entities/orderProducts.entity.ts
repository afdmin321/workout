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
  name: string;

  @Column()
  articleNumber: string;

  @Column()
  link: string;

  @Column({ nullable: true })
  price: number | null;

  @ManyToOne((_) => Orders, (orders) => orders.products)
  @JoinColumn({ name: 'order_id' })
  order: Orders;
}
