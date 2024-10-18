import { ImageType } from "widgets/ImagesEditItem";

export interface ProductCategory {
  id: string;
  name: string;
  disabled: boolean;
}
export enum CategoryId {
  WORKOUT = 'f9a5a94a-d47d-4a1a-aad7-b0287e2d5bde',
  TRAINER = 'd7bcde33-5586-42d6-b940-58129a6a33ee',
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
