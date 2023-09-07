// create-user.dto.ts
import { IsString, IsEmail, Length, Matches, IsArray, MinLength, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 25, {
    message: 'First Name must be between 2 and 25 characters.',
  })
  firstName: string;

  @IsString()
  @Length(2, 25, {
    message: 'Last Name must be between 2 and 25 characters.',
  })
  lastName: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString()
  @Length(6, 50, {
    message: 'Password must be between 6 and 50 characters.',
  })
  @Matches(/.*[0-9].*/, {
    message: 'Password must contain at least one number.',
  })
  password: string;

  @IsString()
  role: string;

  photos: string[];
}
