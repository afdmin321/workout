import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'order/dto/create-order.dto';
import { Orders } from './entities/order.entity';
import { Repository } from 'typeorm';
import { OrderProducts } from './entities/orderProduct.entity';
import nodeMailer from 'utils/nodeMailer';
import htmlTemlate from 'htmlTemlate/htmlTemlate';
@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    @InjectRepository(OrderProducts)
    private readonly orderProductsRepository: Repository<OrderProducts>,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    const { sendMessage } = nodeMailer;
    const { getOrderTemplate } = htmlTemlate;
    const products = createOrderDto.products.map((product) => {
      return {
        name: product.name,
        articleNumber: product.articleNumber,
        price: product.price,
      };
    });
    const orderPrice = createOrderDto.products.reduce(
      (acc, product) => acc + product.price,
      0,
    );
    const message = {
      client_name: createOrderDto.client_name,
      phone: createOrderDto.phone,
      email: createOrderDto.email,
      order: products,
      orderPrice,
    };
    const messageHtml = getOrderTemplate(createOrderDto);
    sendMessage('afdmin321@yandex.ru', messageHtml);
    return 'This action adds a new product';
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
