import { Injectable } from '@nestjs/common';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photosRepository: Repository<Photo>,
  ) {}
  async create(photoData: Express.Multer.File[], user: User) {
    const photosCreated = photoData.map(async (photo) => {
      const newPhoto = new Photo();
      newPhoto.name = photo.filename;
      newPhoto.url = `${process.env.BASE_URL}/uploads/${photo.filename}`;
      newPhoto.user = user;
      return await this.photosRepository.save(newPhoto);
    });
    return Promise.all(photosCreated);
  }

  findAll() {
    return `This action returns all photos`;
  }
}
