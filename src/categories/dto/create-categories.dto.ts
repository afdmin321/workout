import { MinLength } from 'class-validator';

export class CreateCategoriesDto {
  @MinLength(3, { message: 'min length 3 symbols' })
  name: string;
  disabled: boolean;
}
