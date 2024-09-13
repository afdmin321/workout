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
  async create(createGalleryDto: CreateGalleryDto) {
    const { imageDecode } = fileDecode;
    const data = createGalleryDto.images.map((el) => {
      return { ...el, src: imageDecode(el.src) };
    });
    return this.galleryRepository.insert(data).then((res) => res);
  }

  async findAll() {
    return this.galleryRepository.find().then((res) => res);
  }

  async remove(id: string) {
    try {
      return this.galleryRepository.delete(id).then((res) => res);
    } catch (err) {}
  }
}
