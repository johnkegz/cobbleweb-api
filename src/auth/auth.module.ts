import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PhotosModule } from 'src/photos/photos.module';
import { ClientsModule } from 'src/clients/clients.module';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule, ClientsModule, PhotosModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
