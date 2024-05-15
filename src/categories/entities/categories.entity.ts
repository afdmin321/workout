import { Products } from 'products/entities/products.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  disabled: boolean;

  @OneToMany((_) => Products, (product) => product.category, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  products: Products[];
}
