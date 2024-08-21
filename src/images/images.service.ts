import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImagesDto } from 'images/dto/create-images.dto';
import { Images } from './entities/images.entity';
import { Repository } from 'typeorm';
import FileDecode from 'utils/fileDecode';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
  ) {}
  async create(createImagesDto: CreateImagesDto) {
    const { imageDecode } = FileDecode;
    const data = createImagesDto.images.map((image) => {
      return { product: createImagesDto.product, src: imageDecode(image) };
    });

    return this.imagesRepository.insert(data).then((res) => res);
  }

  async findAll() {
    return this.imagesRepository.find().then((res) => res);
  }

  async findOne(id: string) {
    return this.imagesRepository.findOne({ where: { id } }).then((res) => res);
  }

  async remove(id: string) {
    return this.imagesRepository.delete(id).then((res) => res);
  }
}
