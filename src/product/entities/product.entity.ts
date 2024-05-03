import { Category } from 'category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  disabled: false;

  @Column()
  ageGroup: string;

  @Column()
  material: string;

  @Column()
  size: string;

  @Column()
  popularity: number;

  @ManyToOne((type) => Category, (category) => category.products)
  category: Category;
}
