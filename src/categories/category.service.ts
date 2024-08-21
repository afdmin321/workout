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
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async create(createCategoriesDto: CreateCategoriesDto) {
    const existCategory = await this.categoriesRepository.find({
      where: { name: createCategoriesDto.name },
    });

    if (existCategory.length)
      throw new BadRequestException('this category already exist!');

    const category = await this.categoriesRepository.save({
      name: createCategoriesDto.name,
      disabled: createCategoriesDto.disabled,
    });
    return category;
  }

  async findAll() {
    return this.categoriesRepository
      .find({ relations: { products: true } })
      .then((res) => res);
  }
  async findAllWithPagination(categoryId: string, page: number, limit: number) {
    return this.categoriesRepository
      .find({
        relations: {
          products: { images: true },
        },
        where: {
          id: categoryId,
        },
        take: limit,
        skip: (page - 1) * limit,
      })
      .then((res) => res);
  }

  async findOne(id: string) {
    try {
      return this.categoriesRepository
        .findOne({
          where: { id },
          relations: { products: { images: true } },
        })
        .then((res) => res);
    } catch (err) {
      throw new NotFoundException('Category not found!');
    }
  }

  async update(id: string, updateCategoriesDto: UpdateCategoriesDto) {
    try {
      return this.categoriesRepository
        .update(id, updateCategoriesDto)
        .then((res) => res);
    } catch (err) {
      throw new NotFoundException('Category not found!');
    }
  }

  async remove(id: string) {
    try {
      return this.categoriesRepository.delete(id).then((res) => res);
    } catch (err) {
      throw new NotFoundException('Category not found!');
    }
  }
}
