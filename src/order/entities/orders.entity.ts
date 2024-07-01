import { Products } from 'products/entities/products.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderProducts } from './orderProducts.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_name: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  email: string | null;

  @OneToMany((_) => OrderProducts, (orderProduct) => orderProduct)
  product: Products[];
}
