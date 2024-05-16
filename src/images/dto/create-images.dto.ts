import { IsNotEmpty } from 'class-validator';
import { Products } from 'products/entities/products.entity';

export class CreateImagesDto {
  @IsNotEmpty()
  images: string[];
  @IsNotEmpty()
  product: Products;
}
