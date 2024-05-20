import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Orders } from './order.entity';

@Entity()
export class OrderProducts {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne((_) => Orders, (orders) => orders.products)
  @JoinColumn({ name: 'order_id' })
  order: Orders;
}
