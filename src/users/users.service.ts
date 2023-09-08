import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private readonly clientsService: ClientsService,
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
    const passwordHash = await this.createPasswordHash(password);
    user.password = passwordHash;
    user.role = role;
    return await this.usersRepository.save(user);
  }

  async createPasswordHash(password) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  findOne(email: string) {
    return this.clientsService.findClientByEmail(email);
  }

  findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
