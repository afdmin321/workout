import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImagesDto } from 'images/dto/create-images.dto';
import { Images } from './entities/images.entity';
import { Repository } from 'typeorm';
import FileDecode from 'utils/fileDecode';
import { UpdateImagesDto } from './dto/update-images.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
  ) {}
  async create(createImagesDto: CreateImagesDto) {
    const { imageDecode } = FileDecode;
    const data = createImagesDto.data.map((image) => {
      return {
        ...image,
        src: imageDecode(image.src),
      };
    });
    return this.imagesRepository
      .insert(data)
      .then((res) => res)
      .catch((err) => console.log(err));
  }
  async update(updateImagesDto: UpdateImagesDto) {
    const data = updateImagesDto.data;
    for (let i = 0; i < data.length; i++) {
      await this.imagesRepository.update(data[i].id, data[i]);
    }
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
