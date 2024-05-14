import { Injectable } from '@nestjs/common';
import { CreateImageDto } from 'image/dto/create-image.dto';
import { UpdateImageDto } from 'image/dto/update-image.dto';

@Injectable()
export class ImageService {
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  update(id: string, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
