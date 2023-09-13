import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsString, IsUrl } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateClientDto extends CreateUserDto {}
