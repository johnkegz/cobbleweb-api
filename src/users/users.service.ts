import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { ClientsService } from 'src/clients/clients.service';
import { PhotosService } from 'src/photos/photos.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private readonly clientsService: ClientsService,
    private readonly photosService: PhotosService,
  ) {}
  async create(userData: CreateUserDto) {
    const { firstName, lastName, email, password, role } = userData;
    const userExists = await this.findByEmail(email);
    if (userExists) {
      throw new ConflictException('User with email already exists');
    }
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.role = role;
    return await this.usersRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async register(
    registrationData: CreateUserDto,
    photoData: Express.Multer.File[],
  ) {
    const userCreated = await this.create(registrationData);
    if (userCreated) {
      const photosCreated = await this.photosService.create(
        photoData,
        userCreated,
      );
      if (photosCreated) {
        return await this.clientsService.create(
          registrationData,
          photosCreated,
        );
      }
    }
  }

  findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
