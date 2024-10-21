import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from 'products/dto/create-products.dto';
import { UpdateProductsDto } from 'products/dto/update-products.dto';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // url/pagination?categoryId=id&page=1&limit=3
  @Get()
  findAllWithPagination(
    @Query('filter') filter: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sort') sort: string,
    @Query('order') order: string,
    @Query('search') search: string,
  ) {
    return this.productsService.findAllWithPagination(
      +page || null,
      +limit || null,
      filter,
      sort,
      order,
      search,
    );
  }
  @Get('random')
  findRandom(@Query('limit') limit: number) {
    return this.productsService.findRandom(limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createProductsDto: CreateProductsDto) {
    return this.productsService.create(createProductsDto);
  }

  @Post('update/price')
  @UseGuards(JwtAuthGuard)
  updatePrice(@Body() data: { multiply: number }) {
    return this.productsService.updatePriceCatalog(data.multiply);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateProductsDto: UpdateProductsDto,
  ) {
    return this.productsService.update(id, updateProductsDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
