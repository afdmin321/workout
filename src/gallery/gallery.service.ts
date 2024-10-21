import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGalleryDto } from 'gallery/dto/create-gallery.dto';

import { Gallery } from './entities/gallery.entity';
import { Repository } from 'typeorm';
import fileDecode from 'utils/fileDecode';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { Logger } from 'Logger/Logger';
import telegramApi from 'telegramApi/telegramApi';
import { emailUsers, telegramUsers } from 'const/const';
import nodeMailer from 'utils/nodeMailer';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
    private readonly logger: Logger,
  ) {}
  async create(createGalleryDto: CreateGalleryDto) {
    const { imageDecode } = fileDecode;
    const data = createGalleryDto.images.map((el) => {
      return { ...el, src: imageDecode(el.src) };
    });
    return this.galleryRepository
      .insert(data)
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `Gallery: ошибка создания Gallery! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Gallery:  ошибка создания Gallery!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Gallery: ошибка создания Gallery!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }

  async findAll() {
    return this.galleryRepository
      .find()
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `Gallery: ошибка получение Gallery! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Gallery:  ошибка получение Gallery!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Gallery: ошибка получение Gallery!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }

  async update(updateGalleryDto: UpdateGalleryDto) {
    const updateDate = updateGalleryDto.images?.map((image) => {
      return { index: image.index, id: image.id };
    });
    return updateDate.forEach((image) => {
      this.galleryRepository?.update(image.id, image).catch((err) => {
        this.logger.error(
          `Gallery: ошибка обновления индекса Gallery! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Gallery:  ошибка обновления индекса Gallery!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Gallery: ошибка обновления индекса Gallery!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
    });
  }
  async remove(id: string) {
    try {
      return this.galleryRepository
        .delete(id)
        .then((res) => res)
        .catch((err) => {
          this.logger.error(
            `Gallery: ошибка удаление изображения Gallery! Ошибка: ${err.message}`,
          );
          telegramApi
            .sendMessage(
              telegramUsers.idAdmin,
              'Gallery:  ошибка удаление изображения Gallery!',
            )
            .catch((errTg) =>
              nodeMailer.sendMessage(
                emailUsers.emailAdmin,
                `Gallery: ошибка удаление изображения Gallery!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
              ),
            );
          throw new BadRequestException(err.message);
        });
    } catch (err) {}
  }
}
