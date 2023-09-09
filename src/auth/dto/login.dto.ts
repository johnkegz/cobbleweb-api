import { IsString, IsEmail, Length } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @Length(6, 50)
  @ApiProperty()
  password: string;
}
