export enum ProductCategory {
  WORKOUT = 'WORKOUT',
  TRAINER = 'TRAINER',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  articleNumber: string;
  category: ProductCategory;
  images: string[];
  price: number | null;
  ageGroup: string | null;
  material: string | null;
  size: string | null;
}
