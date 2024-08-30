import { Module } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './entities/categories.entity';
import { LoggerModule } from 'Logger/LoggerModule';

@Module({
  imports: [TypeOrmModule.forFeature([Categories]), LoggerModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
