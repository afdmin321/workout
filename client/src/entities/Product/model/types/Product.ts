import { ImageType } from "widgets/ImagesEditItem";

export interface ProductCategory {
  id: string;
  name: string;
  disabled: boolean;
}
export enum CategoryId {
  WORKOUT = '43abe61a-0a60-4ec8-b2f7-095b30022bba',
  TRAINER = 'ea932f25-e407-4598-a288-adb991d631a6',
}

export type ProductFilter = CategoryId.WORKOUT | CategoryId.TRAINER | null;

export enum ProductSort {
  LOWER_PRICE = 'price&ASC',
  GREAT_PRICE = 'price&DESC',
  LOWER_SIZE = 'length&ASC',
  GREAT_SIZE = 'length&DESC',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  articleNumber: string;
  category: ProductCategory;
  images: ImageType[];
  disabled: boolean;
  price: number | null;
  ageGroup: string | null;
  material: string | null;
  length: number | null;
  width: number | null;
  height: number | null;
  lengthDelivery: number | null;
  widthDelivery: number | null;
  heightDelivery: number | null;
  weightDelivery: number | null;
}
export interface CreateProduct
  extends Omit<Product, 'id' | 'images' | 'category'> {
  id?: string;
  category?: ProductCategory;
  images: ImageType[];
  newImages: ImageType[];
}
