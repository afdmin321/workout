import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
// import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.find({
      where: { username: createUserDto.username },
    });
    if (existUser.length) {
      throw new BadRequestException('this username already exist!');
    }
    // const user = await this.userRepository.save({
    //   username: createUserDto.username,
    //   password: await hash(createUserDto.password),
    // });

    return 'registration is prohibited';
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { username } });
  }
}
