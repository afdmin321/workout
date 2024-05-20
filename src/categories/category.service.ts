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
    const categories = await this.categoriesRepository.find();

    return categories;
  }
  async findAllWithPagination(categoryId: string, page: number, limit: number) {
    const products = await this.categoriesRepository.find({
      relations: {
        products: { images: true },
      },
      where: {
        id: categoryId,
      },
      take: limit,
      skip: (page - 1) * limit,
    });
    return products;
  }

  async findOne(id: string) {
    const category = await this.categoriesRepository.findOne({
      where: { id },
      relations: { products: { images: true } },
    });
    if (!category) throw new NotFoundException('Category not found!');
    return category;
  }

  async update(id: string, updateCategoriesDto: UpdateCategoriesDto) {
    const category = await this.categoriesRepository.findOne({
      where: { id },
    });

    if (!category) throw new NotFoundException('Category not found!');

    return await this.categoriesRepository.update(id, updateCategoriesDto);
  }

  async remove(id: string) {
    const category = await this.categoriesRepository.findOne({
      where: { id },
    });
    if (!category) throw new NotFoundException('Category not found!');
    return await this.categoriesRepository.delete(id);
  }
}
