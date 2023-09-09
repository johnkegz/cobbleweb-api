import { Injectable } from '@nestjs/common';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AwsService } from 'src/aws/aws.service';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photosRepository: Repository<Photo>,
    private readonly awsService: AwsService,
  ) {}

  async create(photoData: Express.Multer.File[], user: User) {
    const photoUrls = await this.getS3PhotoURLs(photoData);
    const photosCreated = photoUrls.map(async (photo) => {
      const newPhoto = new Photo();
      newPhoto.name = photo.photoName;
      newPhoto.url = `${photo.photoUrl}`;
      newPhoto.user = user;
      return await this.photosRepository.save(newPhoto);
    });
    return Promise.all(photosCreated);
  }

  async getS3PhotoURLs(photos: Express.Multer.File[]) {
    const bucketName = process.env.AWS_BUCKET_NAME;
    const folderName = 'photos';
    const uploadedUrls = await this.awsService.uploadPhotosToS3(
      photos,
      bucketName,
      folderName,
    );
    return uploadedUrls;
  }

  findAll() {
    return `This action returns all photos`;
  }
}
