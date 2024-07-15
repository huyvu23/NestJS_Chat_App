import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { TCreateUser } from 'src/user/type';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

 async createUser(payload: TCreateUser) {

    // DEFINED NUMBER OF REPETITIONS TO HASH PASSWORD
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(payload.password, saltRounds);
    const user = this.userRepository.create({
      ...payload,
      password:hashedPassword,
      created_at: new Date(),
    });
    return this.userRepository.save(user);
  }
}
