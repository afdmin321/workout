import { Module } from '@nestjs/common';
import { GalleryController } from 'gallery/gallery.controller';
import { GalleryService } from 'gallery/gallery.service';
import { Gallery } from './entities/gallery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  controllers: [GalleryController],
  providers: [GalleryService],
})
export class GalleryModule {}
