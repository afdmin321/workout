import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from 'order/order.controller';
import { OrderService } from 'order/order.service';
import { Orders } from './entities/order.entity';
import { OrderProducts } from './entities/orderProduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, OrderProducts])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrdersModule {}
