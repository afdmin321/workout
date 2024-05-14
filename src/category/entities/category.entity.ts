import { Product } from 'product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  disabled: false;

  @OneToMany((_) => Product, (product) => product.category, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  products: Product[];
}
