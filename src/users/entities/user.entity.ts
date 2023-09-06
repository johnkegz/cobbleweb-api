import { Length, Matches } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  @Length(2, 25, {
    message: 'Password must be between 2 and 25 characters',
  })
  firstName: string;

  @Column({ length: 25 })
  @Length(2, 25, {
    message: 'Password must be between 2 and 25 characters',
  })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 50 })
  @Length(6, 50, {
    message: 'Password must be between 6 and 50 characters',
  })
  @Matches(/.*[0-9].*/, {
    message: 'Password must contain at least one number',
  })
  password: string;

  @Column()
  role: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
