import { Category } from 'category/entities/category.entity';
import { Image } from 'image/entities/image.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne((_) => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany((_) => Image, (image) => image.src)
  images: Image[];
}
