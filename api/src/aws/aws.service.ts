import { Injectable } from '@nestjs/common';
import { s3 } from './aws.config';

@Injectable()
export class AwsService {
  async uploadPhotosToS3(
    files: Express.Multer.File[],
    bucketName: string,
    folderName: string,
  ) {
    const uploadPromises = files.map(async (file) => {
      const params = {
        Bucket: bucketName,
        Key: `${folderName}/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
      };

      try {
        const result = await s3.upload(params).promise();
        return {
          photoUrl: result.Location,
          photoName: file.originalname,
        };
      } catch (error) {
        throw new Error(`Failed to upload photo: ${error.message}`);
      }
    });

    const uploadedUrls = await Promise.all(uploadPromises);
    return uploadedUrls;
  }
}
