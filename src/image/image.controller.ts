import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ImageService } from 'image/image.service';
import { CreateImageDto } from 'image/dto/create-image.dto';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(id);
  }
}
