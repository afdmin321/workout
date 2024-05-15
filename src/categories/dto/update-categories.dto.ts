import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesDto } from 'categories/dto/create-categories.dto';

export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
