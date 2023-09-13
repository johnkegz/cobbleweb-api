import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { PhotosService } from 'src/photos/photos.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly clientsService: ClientsService,
    private readonly photosService: PhotosService,
    private jwtService: JwtService,
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

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const match = await bcrypt.compare(pass, user.password);
      if (match) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
