import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PhotosModule } from 'src/photos/photos.module';
import { ClientsModule } from 'src/clients/clients.module';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AwsModule } from 'src/aws/aws.module';

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    PhotosModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
    AwsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
