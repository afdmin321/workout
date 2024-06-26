import { Products } from 'products/entities/products.entity';

export class CreateOrderDto {
  client_name: string;
  phone: string;
  products: Products[];
  email?: string | null;
}
