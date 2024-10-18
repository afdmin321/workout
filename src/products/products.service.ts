import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { ILike, Repository } from 'typeorm';
import { ImagesService } from 'images/images.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
    private readonly imagesService: ImagesService,
  ) {}

  async create(createProductsDto: CreateProductsDto) {
    const isExist = await this.productsRepository.findBy({
      name: createProductsDto.name,
      category: createProductsDto.category,
    });

    if (isExist.length)
      throw new BadRequestException('This product already exist');
    let i: number = 1;
    let id = createProductsDto.name
      .trim()
      .replaceAll(',', '')
      .replaceAll('.', '')
      .toLowerCase()
      .replaceAll(' ', '-');
    while (i) {
      if (id.includes(' ') || id.includes(',') || id.includes('.')) {
        id = createProductsDto.name
          .replaceAll(',', '')
          .replaceAll('.', '')
          .replaceAll(' ', '-');
      }
      if (id.includes(' ') || id.includes(',') || id.includes('.')) {
        i++;
      } else {
        i = 0;
      }
    }

    const newProduct = {
      id,
      name: createProductsDto.name,
      description: createProductsDto.description,
      disabled: createProductsDto.disabled,
      ageGroup: createProductsDto.ageGroup,
      category: createProductsDto.category,
      articleNumber: createProductsDto.articleNumber,
      length: createProductsDto.length,
      width: createProductsDto.width,
      height: createProductsDto.height,
      material: createProductsDto.material,
      price: createProductsDto.price,
      lengthDelivery: createProductsDto.lengthDelivery,
      widthDelivery: createProductsDto.widthDelivery,
      heightDelivery: createProductsDto.heightDelivery,
      weightDelivery: createProductsDto.weightDelivery,
    };
    if (!newProduct) throw new BadRequestException('Somethins went wrong...');

    return this.productsRepository.save(newProduct).then((res) => {
      if (createProductsDto.images?.length) {
        const images = {
          data: createProductsDto.images.map((image) => {
            return { ...image, product: res };
          }),
        };
        this.imagesService.create(images).then((res) => res);
      }
      return res;
    });
  }
 

  async findAll() {
    return this.productsRepository
      .find({ relations: { images: true } })
      .then((res) => res);
  }

  async findRandom(limit: number) {
    return this.productsRepository
      .createQueryBuilder('products')
      .orderBy('RANDOM()')
      .limit(limit)
      .leftJoinAndSelect('products.images', 'images')
      .getMany()
      .then((res) => res);
  }

  async findAllWithPagination(
    page: number,
    limit: number,
    filter: string,
    sort: string,
    order: string,
    search: string,
  ) {
    return this.productsRepository
      .find({
        relations: {
          category: true,
          images: true,
        },
        order: {
          [sort]: order,
        },
        where: search
          ? [
              { articleNumber: ILike(`%${search}%`), category: { id: filter } },
              { name: ILike(`%${search}%`), category: { id: filter } },
              { description: ILike(`%${search}%`), category: { id: filter } },
            ]
          : { category: { id: filter } },

        take: limit,
        skip: page && limit ? (page - 1) * limit : null,
      })
      .then((res) => res);
  }

  async findOne(id: string) {
    try {
      return this.productsRepository
        .findOne({
          where: { id },
          relations: { images: true, category: true },
        })
        .then((res) => res);
    } catch (err) {
      throw new NotFoundException('product not found');
    }
  }

  async update(id: string, updateProductsDto: UpdateProductsDto) {
    const product = await this.productsRepository.findOne({
      where: { id },
      relations: { images: true },
    });
    if (!product) throw new NotFoundException('product not found');

    const newProduct = await this.productsRepository.update(id, {
      ...updateProductsDto,
      images: undefined,
    });
    if (updateProductsDto?.images?.length) {
      const newImages = updateProductsDto.images
        .filter(
          (image) => !Boolean(product.images.find((e) => e.src === image.src)),
        )
        .map((image) => {
          return { ...image, product: product };
        });
      if (newImages.length) {
        this.imagesService.create({ data: newImages });
      }
    }
    return newProduct;
  }

  async remove(id: string) {
    try {
      return this.productsRepository.delete(id).then((res) => res);
    } catch (err) {
      throw new NotFoundException('product not found');
    }
  }

  async updatePriceCatalog(multiply: number) {
    const catalog = await this.productsRepository.find();
    return catalog.forEach((product) => {
      const price = Math.round(product.price * multiply);
      this.update(product.id, {
        id: product.id,
        price: price,
      });
    });
  }
}
