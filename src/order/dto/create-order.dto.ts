import { IsNotEmpty } from 'class-validator';
import { Products } from 'products/entities/products.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  client_name: string;
  @IsNotEmpty()
  phone: string;
  products?: Products[];
}
