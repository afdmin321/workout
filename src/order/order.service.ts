import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'order/dto/create-order.dto';
import { UpdateOrderDto } from 'order/dto/update-order.dto';

@Injectable()
export class OrderService {
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
