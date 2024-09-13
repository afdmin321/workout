import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoriesDto } from './dto/create-categories.dto';
import { UpdateCategoriesDto } from './dto/update-categories.dto';

import { Categories } from './entities/categories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'Logger/Logger';
import telegramApi from 'telegramApi/telegramApi';
import { emailUsers, telegramUsers } from 'const/const';
import nodeMailer from 'utils/nodeMailer';
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
    private readonly logger: Logger,
  ) {}

  async create(createCategoriesDto: CreateCategoriesDto) {
    return this.categoriesRepository
      .findOne({
        where: { name: createCategoriesDto.name },
      })
      .then(async (category) => {
        if (category) {
          throw new BadRequestException('this category already exist!');
        }
        return this.categoriesRepository
          .save({
            name: createCategoriesDto.name,
            disabled: createCategoriesDto.disabled,
          })
          .then((res) => res);
      })
      .catch((err) => {
        this.logger.error(
          `CATEGORY: ошибка создания категории! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'CATEGORY:  ошибка создания категории!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `CATEGORY: ошибка создания категории!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new BadRequestException(err.message);
      });
  }

  async findAll() {
    return this.categoriesRepository
      .find()
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `CATEGORY: ошибка получения категории! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'CATEGORY:  ошибка получения категории!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `CATEGORY: ошибка получения категории!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new Error(err.message);
      });
  }

  async update(id: string, updateCategoriesDto: UpdateCategoriesDto) {
    return this.categoriesRepository
      .update(id, updateCategoriesDto)
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `CATEGORY: ошибка обновления категории! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'CATEGORY:  ошибка обновления категории!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `CATEGORY: ошибка обновления категории!! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new NotFoundException(err.message);
      });
  }

  async remove(id: string) {
    return this.categoriesRepository
      .delete(id)
      .then((res) => res)
      .catch((err) => {
        this.logger.error(
          `CATEGORY: ошибка удаления категории! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'CATEGORY:  ошибка удаления категории!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `CATEGORY: ошибка удаления категории! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw new NotFoundException(err.message);
      });
  }
}
