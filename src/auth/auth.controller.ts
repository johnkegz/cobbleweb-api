import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
  HttpStatus,
  HttpCode,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('photos'))
  async register(
    @Body() registrationData: CreateUserDto,
    @UploadedFiles() photos: Express.Multer.File[],
  ) {
    if (!photos || photos.length < 4) {
      throw new BadRequestException('At least 4 photos must be uploaded.');
    }
    return this.authService.register(registrationData, photos);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
