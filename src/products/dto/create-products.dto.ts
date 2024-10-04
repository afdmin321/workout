import { Categories } from 'categories/entities/categories.entity';
import { IsNotEmpty } from 'class-validator';
import { Image } from 'types/Image';

export class CreateProductsDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  disabled: boolean;

  @IsNotEmpty()
  category: Categories;

  @IsNotEmpty()
  articleNumber: string;

  @IsNotEmpty()
  images: Image[] | null; // encoded in base64

  ageGroup: string | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  material?: string | null;
  price?: number | null;
  lengthDelivery: number | null;
  widthDelivery: number | null;
  heightDelivery: number | null;
  weightDelivery: number | null;
}
