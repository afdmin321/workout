import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesController } from 'images/images.controller';
import { ImagesService } from 'images/images.service';
import { Images } from './entities/images.entity';
import { LoggerModule } from 'Logger/LoggerModule';

@Module({
  imports: [TypeOrmModule.forFeature([Images]), LoggerModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
