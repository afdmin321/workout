import { IsNotEmpty } from 'class-validator';
import { Products } from 'products/entities/products.entity';

export class CreateImagesDto {
  @IsNotEmpty()
  data: {
    src: string;
    index: number;
    product: Products;
  }[];
}
