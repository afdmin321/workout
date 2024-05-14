import { MinLength } from 'class-validator';

export class CreateCategoryDto {
  @MinLength(3, { message: 'min length 3 symbols' })
  name: string;
  disabled: boolean;
}
