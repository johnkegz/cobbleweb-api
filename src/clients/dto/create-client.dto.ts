import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsString, IsUrl } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateClientDto extends CreateUserDto {
  @IsUrl({}, { message: 'Avatar must be a valid URL' })
  avatar: string;

  @IsArray()
  photos: string[];

  @IsString()
  FullName: string;
}
