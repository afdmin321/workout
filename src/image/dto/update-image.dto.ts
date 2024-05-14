import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from 'image/dto/create-image.dto';

export class UpdateImageDto extends PartialType(CreateImageDto) {}
