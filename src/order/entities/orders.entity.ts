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

  @OneToMany((_) => OrderProducts, (orderProduct) => orderProduct.order)
  products: Products[];
}
