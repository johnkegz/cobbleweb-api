import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ClientsModule } from './clients/clients.module';
import { PhotosModule } from './photos/photos.module';
import { Client } from './clients/entities/client.entity';
import { Photo } from './photos/entities/photo.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { uniqueFileName } from './helpers/unique.filename';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: [User, Client, Photo],
      synchronize: true, // TODO: In prooduction it should be false
    }),
    AuthModule,
    UsersModule,
    ClientsModule,
    PhotosModule,
    MulterModule.register({
      dest: './upload',
      storage: diskStorage({
        destination: './uploads',
        filename: uniqueFileName,
      }),
    }),
    AwsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
