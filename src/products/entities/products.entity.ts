import { Categories } from 'categories/entities/categories.entity';
import { Images } from 'images/entities/images.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  disabled: boolean;

  @Column()
  ageGroup: string;

  @Column()
  material: string;

  @Column()
  size: string;

  @Column()
  popularity: number;

  @ManyToOne((_) => Categories, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Categories;

  @OneToMany((_) => Images, (image) => image.product)
  images: Images[];
}
