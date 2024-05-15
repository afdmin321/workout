import { PartialType } from '@nestjs/mapped-types';
import { CreateImagesDto } from 'images/dto/create-images.dto';

export class UpdateImagesDto extends PartialType(CreateImagesDto) {}
