import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './entities/photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsModule } from 'src/aws/aws.module';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), AwsModule],
  providers: [PhotosService],
  exports: [PhotosService],
})
export class PhotosModule {}
