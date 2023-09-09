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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  badRequestRegitstration,
  loginSuccess,
  loginUnAuthenticated,
  regitstrationSuccess,
} from '../swagger/example.response';
import {
  loginRequest,
  registrationRequest,
} from 'src/swagger/example.requests';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Register new user
  @ApiOperation({ summary: 'Register new user' })
  @ApiBody(registrationRequest)
  @ApiResponse(regitstrationSuccess)
  @ApiResponse(badRequestRegitstration)
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

  //Login
  @ApiBody(loginRequest)
  @ApiOperation({ summary: 'Login with email and password' })
  @ApiResponse(loginUnAuthenticated)
  @ApiResponse(loginSuccess)
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
