import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDto } from 'order/dto/create-order.dto';
import { Orders } from './entities/orders.entity';
import { Repository } from 'typeorm';
import { OrderProducts } from './entities/orderProducts.entity';
import nodeMailer from 'utils/nodeMailer';
import htmlTemlate from 'htmlTemlate/htmlTemlate';
import telegramApi from 'telegramApi/telegramApi';
import { emailUsers, telegramUsers } from 'const/const';
import { Logger } from 'Logger/Logger';

@Injectable()
export class OrderService {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    @InjectRepository(OrderProducts)
    private readonly orderProductsRepository: Repository<OrderProducts>,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    const { sendMessage } = nodeMailer;
    const { getOrderTemplate, getOrderTgTemplate } = htmlTemlate;

    const messageHtml = getOrderTemplate(createOrderDto);

    sendMessage(emailUsers.emailManager, messageHtml).catch((err) => {
      this.logger.error(
        `ORDER: ошибка отправки заказа менеджеру в тг! Ошибка: ${err.message}`,
      );
      telegramApi
        .sendMessage(
          telegramUsers.idAdmin,
          'ORDER: ошибка отправки заказа менеджеру на почту',
        )
        .catch((errTg) =>
          sendMessage(
            emailUsers.emailAdmin,
            `ORDER: ошибка отправки заказа менеджеру и админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
          ),
        );
    });

    telegramApi
      .sendMessage(telegramUsers.idManager, getOrderTgTemplate(createOrderDto))
      .catch((err) => {
        this.logger.error(
          `ORDER: ошибка отправки заказа менеджеру в тг! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'ORDER: ошибка отправки заказа менеджеру в тг!',
          )
          .catch((errTg) => {
            sendMessage(
              emailUsers.emailAdmin,
              `ORDER: ошибка отправки заказа менеджеру и админу в тг!  Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            );
          });
      });

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
              link: `https://воркаут.рф/catalog/${product.id}`,
            };
          });

          this.orderProductsRepository.insert(products).catch((err) => {
            this.logger.error(
              `ORDER: ошибка записи товаров заказа в бд! Ошибка: ${err.message}`,
            );
            telegramApi
              .sendMessage(
                telegramUsers.idAdmin,
                'ORDER: ошибка записи товаров заказа в бд',
              )
              .catch((errTg) =>
                sendMessage(
                  emailUsers.emailAdmin,
                  `ORDER: ORDER: ошибка записи товаров заказа в бд и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
                ),
              );
          });
        }
        return res;
      })
      .catch((err) => {
        this.logger.error(
          `ORDER: ошибка записи заказа в бд! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'ORDER: ошибка записи заказа в бд',
          )
          .catch((errTg) =>
            sendMessage(
              emailUsers.emailAdmin,
              `ORDER: ORDER: ошибка записи заказа в бд и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw Error(err.message);
      });
  }

  async findAll() {
    return this.ordersRepository
      .find({ relations: { products: true } })
      .catch((err) => {
        this.logger.error(
          `ORDER: ошибка получения всех заказов! Ошибка: ${err.message}`,
        );
        telegramApi
          .sendMessage(
            telegramUsers.idAdmin,
            'ORDER: ошибка получения всех заказов!',
          )
          .catch((errTg) =>
            nodeMailer.sendMessage(
              emailUsers.emailAdmin,
              `ORDER: ORDER: ошибка получения всех заказов! и отправка ошибки админу в тг! Ошибка: ${err.message}; Ошибка Тг ${errTg.message}`,
            ),
          );
        throw Error(err.message);
      });
  }

  findOne(id: string) {
    return `This action returns a #${id} product`;
  }
}
