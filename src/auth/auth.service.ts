import { Injectable } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { PhotosService } from 'src/photos/photos.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly clientsService: ClientsService,
    private readonly photosService: PhotosService,
  ) {}

  async register(
    registrationData: CreateUserDto,
    photoData: Express.Multer.File[],
  ) {
    const userCreated = await this.usersService.create(registrationData);
    if (userCreated) {
      const photosCreated = await this.photosService.create(
        photoData,
        userCreated,
      );
      if (photosCreated) {
        return await this.clientsService.create(userCreated, photosCreated);
      }
    }
  }
}
