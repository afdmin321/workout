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
    if (createOrderDto.products) {
      const products = createOrderDto.products.map((product) => {
        return {
          order: newOrder,
          name: product.name,
          price: product.price,
          articleNumber: product.articleNumber,
          link: `https://воркаут.рф/products/${product.id}`,
        };
      });
      this.orderProductsRepository
        .insert(products)
        .then((res) => console.log(res));
    }

    const messageHtml = getOrderTemplate(createOrderDto);

    // sendMessage('afdmin321@yandex.ru', messageHtml);
    telegramApi.sendMessage(getOrderTgTemplate(createOrderDto));
    return newOrder;
  }

  async findAll() {
    return this.ordersRepository.find({
      relations: {
        products: true,
      },
    });

    return this.orderProductsRepository.find({ relations: { order: true } });
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
