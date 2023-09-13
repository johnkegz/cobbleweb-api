import { IsUrl } from 'class-validator';
import { Photo } from 'src/photos/entities/photo.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, ManyToMany, BeforeInsert, JoinTable } from 'typeorm';

@Entity('clients')
export class Client extends User {
  @Column({ nullable: false })
  @IsUrl({}, { message: 'Avatar must be a valid URL' })
  avatar: string;

  @ManyToMany(() => Photo, { cascade: true })
  @JoinTable()
  photos: Photo[];

  @Column()
  FullName: string;
}
