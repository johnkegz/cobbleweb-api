import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PhotosModule } from 'src/photos/photos.module';
import { ClientsModule } from 'src/clients/clients.module';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule, ClientsModule, PhotosModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
