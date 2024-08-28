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

    const messageHtml = getOrderTemplate(createOrderDto);

    sendMessage('afdmin321@yandex.ru', messageHtml);

    telegramApi.sendMessage(getOrderTgTemplate(createOrderDto));

    return this.ordersRepository
      .save({
        client_name: createOrderDto.client_name,
        phone: createOrderDto.phone,
        allPrice: createOrderDto.products.reduce(
          (acc, product) => acc + product.price,
          0,
        ),
      })
      .then((res) => {
        if (createOrderDto.products) {
          const products = createOrderDto.products.map((product) => {
            return {
              order: res,
              link: `https://воркаут.рф/products/${product.id}`,
            };
          });
          this.orderProductsRepository.insert(products);
        }
        return res;
      });
  }

  async findAll() {
    return this.ordersRepository.find({ relations: { products: true } });
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
