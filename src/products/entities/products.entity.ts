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
  disabled: boolean;

  @Column()
  articleNumber: string;

  @ManyToOne((_) => Categories, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Categories;

  @OneToMany((_) => Images, (image) => image.product)
  images: Images[];

  @Column({ nullable: true })
  price: number | null;

  @Column({ nullable: true })
  ageGroup: string | null;

  @Column({ nullable: true })
  material: string | null;

  @Column({ nullable: true })
  size: string | null;
}
