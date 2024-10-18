import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ImagesService } from 'images/images.service';
import { CreateImagesDto } from 'images/dto/create-images.dto';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';

@Controller('api/images')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}
  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createImagesDto: CreateImagesDto) {
    return this.imageService.create(createImagesDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.imageService.remove(id);
  }
}
