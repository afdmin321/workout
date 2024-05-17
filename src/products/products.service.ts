import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Repository } from 'typeorm';
import { ImagesService } from 'images/images.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
    private readonly imagesService: ImagesService,
  ) {}

  async create(createProductsDto: CreateProductsDto) {
    const isExist = await this.productRepository.findBy({
      name: createProductsDto.name,
      category: createProductsDto.category,
    });
    if (isExist) throw new BadRequestException('This product already exist');

    const newProduct = {
      name: createProductsDto.name,
      description: createProductsDto.description,
      disabled: createProductsDto.disabled,
      ageGroup: createProductsDto.ageGroup,
      category: createProductsDto.category,
      popularity: createProductsDto.popularity,
      size: createProductsDto.size,
      material: createProductsDto.material,
      price: createProductsDto.price,
    };
    if (!newProduct) throw new BadRequestException('Somethins went wrong...');
    const product = await this.productRepository.save(newProduct);
    this.imagesService.create({
      images: createProductsDto.images,
      product: product,
    });
    return product;
  }

  async findAll() {
    return await this.productRepository.find({ relations: { images: true } });
  }

  async findAllWithPagination(categoryId: string, page: number, limit: number) {
    const products = await this.productRepository.find({
      relations: {
        category: true,
        images: true,
      },
      where: {
        category: { id: categoryId },
      },
      take: limit,
      skip: (page - 1) * limit,
    });
    return products;
  }
  async findOne(id: string) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { images: true },
    });
    if (!product) throw new NotFoundException('product not found');

    return product;
  }

  async update(id: string, updateProductsDto: UpdateProductsDto) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { images: true },
    });

    if (!product) throw new NotFoundException('product not found');

    const newProduct = await this.productRepository.update(id, {
      ...updateProductsDto,
      images: undefined,
    });
    if (updateProductsDto?.images?.length) {
      const newImages = updateProductsDto.images.filter(
        (image) => !Boolean(product.images.find((e) => e.src === image)),
      );
      if (newImages.length) {
        this.imagesService.create({
          images: newImages,
          product: product,
        });
      }
    }
    return newProduct;
  }

  async remove(id: string) {
    const product = await this.productRepository.findOne({
      where: { id },
    });
    if (!product) throw new NotFoundException('product not found');
    return this.productRepository.delete(id);
  }
}
