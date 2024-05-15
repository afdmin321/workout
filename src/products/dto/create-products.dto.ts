import { Categories } from 'categories/entities/categories.entity';
import { IsNotEmpty, IsNumber } from 'class-validator';

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
  @IsNumber()
  popularity: number;
  images?: string[]; // encoded in base64
  size?: string;
  material?: string;
  price?: number;
}
