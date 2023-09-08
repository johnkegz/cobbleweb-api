import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
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

  findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
