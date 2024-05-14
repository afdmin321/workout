import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from 'category/dto/create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  id: string;
  name: string;
  disabled: boolean;
}
