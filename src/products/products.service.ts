import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Repository } from 'typeorm';
import { Images } from 'images/entities/images.entity';
import { imageDecode } from 'utils/image_decode';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
  ) {}

  async create(createProductsDto: CreateProductsDto) {
    console.log(createProductsDto);
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
    for (const image of createProductsDto.images) {
      await this.imagesRepository.save({
        product: product.id,
        src: imageDecode(image),
      });
    }
    return product;
  }

  async findAll() {
    return await this.productRepository.find({ relations: { images: true } });
  }

  async findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  async update(id: string, updateProductsDto: UpdateProductsDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
