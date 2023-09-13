import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from 'src/photos/entities/photo.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  async create(user: User, photos: Photo[]) {
    const client = new Client();
    const { firstName, lastName, email, password, role } = user;
    client.firstName = firstName;
    client.lastName = lastName;
    client.email = email;
    client.password = password;
    client.role = role;
    client.FullName = `${user.firstName} ${user.lastName}`;
    client.avatar =
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
    client.photos = photos;
    const clientCreated = await this.clientRepository.save(client);
    delete clientCreated['password'];
    return clientCreated;
  }

  async findClientByEmail(email: string) {
    const client = await this.clientRepository.findOne({
      where: { email: email },
      relations: ['photos'],
    });
    delete client['password'];
    return client;
  }
}
