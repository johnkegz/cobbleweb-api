import { Controller, Get } from '@nestjs/common';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}
  @Get()
  findAll() {
    return this.photosService.findAll();
  }
}
