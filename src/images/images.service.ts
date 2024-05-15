import { Injectable } from '@nestjs/common';
import { CreateImagesDto } from 'images/dto/create-images.dto';
import { UpdateImagesDto } from 'images/dto/update-images.dto';

@Injectable()
export class ImagesService {
  create(createImagesDto: CreateImagesDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  update(id: string, updateImagesDto: UpdateImagesDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
