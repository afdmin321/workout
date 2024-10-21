import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImagesDto } from 'images/dto/create-images.dto';
import { Images } from './entities/images.entity';
import { Repository } from 'typeorm';
import FileDecode from 'utils/fileDecode';
import { UpdateImagesDto } from './dto/update-images.dto';
import telegramApi from 'telegramApi/telegramApi';
import { emailUsers, telegramUsers } from 'const/const';
import nodeMailer from 'utils/nodeMailer';
import { Logger } from 'Logger/Logger';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
    private readonly logger: Logger,
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
      .catch((err) => {
        this.logger.error(
          `Image Product: ошибка создания Image Product! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Image Product: ошибка создания Image Product!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Image Product: ошибка создания Image Product!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }
  async update(updateImagesDto: UpdateImagesDto) {
    const data = updateImagesDto.data;
    try {
      for (let i = 0; i < data.length; i++) {
        await this.imagesRepository.update(data[i].id, data[i]);
      }
    } catch (err) {
      this.logger.error(
        `Image Product: ошибка обновления индекса Image Product! Ошибка: ${err.message}`,
      );
      telegramApi
        .sendMessage(
          telegramUsers.idAdmin,
          'Image Product: ошибка обновления индекса Image Product!',
        )
        .catch((errTg) =>
          nodeMailer.sendMessage(
            emailUsers.emailAdmin,
            `Image Product: ошибка обновления индекса Image Product!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
          ),
        );
      throw new BadRequestException(err.message);
    }
  }
  async findAll() {
    return this.imagesRepository
      .find()
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `Image Product: ошибка получения Image Product! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Image Product: ошибка получения Image Product!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Image Product: ошибка получения Image Product!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }

  async findOne(id: string) {
    return this.imagesRepository
      .findOne({ where: { id } })
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `Image Product: ошибка получения одного Image Product! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Image Product: ошибка получения одного Image Product!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Image Product: ошибка получения одного Image Product!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }

  async remove(id: string) {
    return this.imagesRepository
      .delete(id)
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `Image Product: ошибка удаления Image Product! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'Image Product: ошибка удаления Image Product!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `Image Product: ошибка удаления Image Product!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }
}
