export enum ProductCategory {
  WORKOUT = 'WORKOUT',
  TRAINER = 'TRAINER',
}
export enum CategoryId {
  WORKOUT = 'e271c759-e6b1-42b9-a50d-2c969d7864d7',
  TRAINER = '06cb0381-4b04-4cfa-ad96-2f9e3cba057b',
}

export type ProductFilter = CategoryId.WORKOUT | CategoryId.TRAINER | null;

export enum ProductSort {
  LOWER_PRICE = 'price&ASC',
  GREAT_PRICE = 'price&DESC',
  LOWER_SIZE = 'size&ASC',
  GREAT_SIZE = 'size&DESC',
}
export interface ProductImeges {
  id: string;
  src: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  articleNumber: string;
  category: ProductCategory;
  images: ProductImeges[];
  price: number | null;
  ageGroup: string | null;
  material: string | null;
  size: string | null;
}
