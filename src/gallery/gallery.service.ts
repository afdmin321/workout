import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGalleryDto } from 'gallery/dto/create-gallery.dto';

import { Gallery } from './entities/gallery.entity';
import { Repository } from 'typeorm';
import fileDecode from 'utils/fileDecode';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
  ) {}
  create(createGalleryDto: CreateGalleryDto) {
    const { imageDecode } = fileDecode;
    const data = createGalleryDto.data.map((el) => {
      return { ...el, src: imageDecode(el.src) };
    });
    return this.galleryRepository.insert(data).then((res) => res);
  }

  findAll() {
    return this.galleryRepository.find().then((res) => res);
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
