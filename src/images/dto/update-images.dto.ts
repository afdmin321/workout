import { IsNotEmpty } from 'class-validator';

export class UpdateImagesDto {
  @IsNotEmpty()
  data: {
    id: string;
    index: number;
  }[];
}
