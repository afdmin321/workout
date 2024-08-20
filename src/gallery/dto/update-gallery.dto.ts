import { PartialType } from '@nestjs/mapped-types';
import { CreateGalleryDto } from 'gallery/dto/create-gallery.dto';

export class UpdateGalleryDto extends PartialType(CreateGalleryDto) {}
