import { Products } from 'products/entities/products.entity';

export interface OrderType {
  client_name: string;
  phone: string;
  products?: Products[];
  email?: string | null;
}
