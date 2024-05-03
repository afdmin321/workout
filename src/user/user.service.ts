import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UpdateUserDto } from 'user/dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: sting) {
    return `This action returns a #${id} product`;
  }

  update(id: sting, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: sting) {
    return `This action removes a #${id} product`;
  }
}
