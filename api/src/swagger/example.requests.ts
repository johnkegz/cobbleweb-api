import { LoginDto } from 'src/auth/dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export const loginRequest = {
  type: LoginDto,
  examples: {
    user: {
      description: 'Example of logging in',
      value: {
        email: 'test@example.com',
        password: 'password5',
      },
    },
  },
};

export const registrationRequest = {
  type: CreateUserDto,
  examples: {
    user: {
      description: 'Example of registering new user',
      value: {
        email: 'test@example.com',
        password: 'password5',
        firstName: 'test',
        lastName: 'tes',
        role: 'admin',
        photos: [],
      },
    },
  },
};
