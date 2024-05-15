import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Images } from 'images/entities/images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products, Images])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
