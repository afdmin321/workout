import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from 'products/dto/create-products.dto';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
  id: string;
}
