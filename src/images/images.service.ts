import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImagesDto } from 'images/dto/create-images.dto';
import { Images } from './entities/images.entity';
import { Repository } from 'typeorm';
import { imageDecode } from 'utils/image_decode';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
  ) {}
  async create(createImagesDto: CreateImagesDto) {
    for (const image of createImagesDto.images) {
      const src = imageDecode(image);
      await this.imagesRepository.save({
        src,
        product: createImagesDto.product,
      });
    }
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.imagesRepository.find();
  }

  async findOne(id: string) {
    return await this.imagesRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    return await this.imagesRepository.delete(id);
  }
}
