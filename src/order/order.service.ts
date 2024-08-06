import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'order/dto/create-order.dto';
import { Orders } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { OrderProducts } from './entities/orderProducts.entity';
import nodeMailer from 'utils/nodeMailer';
import htmlTemlate from 'htmlTemlate/htmlTemlate';
import telegramApi from 'telegramApi/telegramApi';
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    @InjectRepository(OrderProducts)
    private readonly orderProductsRepository: Repository<OrderProducts>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const { sendMessage } = nodeMailer;
    const { getOrderTemplate, getOrderTgTemplate } = htmlTemlate;
    console.log(createOrderDto);

    const newOrder = await this.ordersRepository.save({
      client_name: createOrderDto.client_name,
      phone: createOrderDto.phone,
      products: createOrderDto.products,
    });
    // for (const product of createOrderDto.products) {
    //   await this.orderProductsRepository.save({
    //     product,
    //     order: newOrder,
    //   });
    // }
    const messageHtml = getOrderTemplate(createOrderDto);

    // sendMessage('afdmin321@yandex.ru', messageHtml);
    telegramApi.sendMessage(getOrderTgTemplate(createOrderDto));
    return newOrder;
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
