import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { uniqueFileName } from 'src/helpers/unique.filename';

@Controller('api')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  @UseInterceptors(
    FilesInterceptor('photos', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: uniqueFileName,
      }),
    }),
  )
  async register(
    @Body() registrationData: CreateUserDto,
    @UploadedFiles() photos: Express.Multer.File[],
  ) {
    if (!photos || photos.length < 4) {
      throw new BadRequestException('At least 4 photos must be uploaded.');
    }
    return this.userService.register(registrationData, photos);
  }
}
