export class CreateProductDto {
  name: string;
  description: string;
  disabled: boolean;
  ageGroup: string;
  category: string;
  popularity: number | null;
  images: string[]; // encoded in base64
  size?: string;
  material?: string;
  price?: number;
}
