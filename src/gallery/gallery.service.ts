import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGalleryDto } from 'gallery/dto/create-gallery.dto';

import { Gallery } from './entities/gallery.entity';
import { Repository } from 'typeorm';
import fileDecode from 'utils/fileDecode';
import { UpdateGalleryDto } from './dto/update-gallery.dto';

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

  async update(updateGalleryDto: UpdateGalleryDto) {
    const updateDate = updateGalleryDto.images?.map((image) => {
      return { index: image.index, id: image.id };
    });
    return updateDate.forEach((image) => {
      this.galleryRepository?.update(image.id, image);
    });
  }
  async remove(id: string) {
    try {
      return this.galleryRepository.delete(id).then((res) => res);
    } catch (err) {}
  }
}
