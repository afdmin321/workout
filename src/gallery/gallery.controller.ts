import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { GalleryService } from 'gallery/gallery.service';
import { CreateGalleryDto } from 'gallery/dto/create-gallery.dto';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Get()
  findAll() {
    return this.galleryService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galleryService.remove(id);
  }
}
