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
    const { getOrderTemplate } = htmlTemlate;

    const newOrder = await this.ordersRepository.save(createOrderDto);
    for (const product of createOrderDto.products) {
      await this.orderProductsRepository.save({
        product,
        order: newOrder,
      });
    }
    const messageHtml = getOrderTemplate(createOrderDto);
    sendMessage('afdmin321@yandex.ru', messageHtml);
    telegramApi.sendMessage(messageHtml);
    return newOrder;
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
