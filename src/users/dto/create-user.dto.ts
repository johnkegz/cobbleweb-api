// create-user.dto.ts
import { IsString, IsEmail, Length, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Length(2, 25, {
    message: 'First Name must be between 2 and 25 characters.',
  })
  firstName: string;

  @ApiProperty()
  @IsString()
  @Length(2, 25, {
    message: 'Last Name must be between 2 and 25 characters.',
  })
  lastName: string;

  @ApiProperty()
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty()
  @IsString()
  @Length(6, 50, {
    message: 'Password must be between 6 and 50 characters.',
  })
  @Matches(/.*[0-9].*/, {
    message: 'Password must contain at least one number.',
  })
  password: string;

  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  photos: string[];
}
