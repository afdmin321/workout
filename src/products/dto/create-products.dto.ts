import { Categories } from 'categories/entities/categories.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateProductsDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  disabled: boolean;
  @IsNotEmpty()
  ageGroup: string;
  @IsNotEmpty()
  category: Categories;
  @IsNotEmpty()
  articleNumber: string;
  images?: string[] | null; // encoded in base64
  size?: string | null;
  material?: string | null;
  price?: number | null;
}
