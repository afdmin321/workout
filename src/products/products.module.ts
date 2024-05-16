import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Images } from 'images/entities/images.entity';
import { ImagesService } from 'images/images.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Images])],
  controllers: [ProductsController],
  providers: [ProductsService, ImagesService],
})
export class ProductsModule {}
