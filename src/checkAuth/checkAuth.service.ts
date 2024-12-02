import { Injectable } from '@nestjs/common';

@Injectable()
export class checkAuthService {
  create() {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  update(id: string) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
