import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from 'order/order.controller';
import { OrderService } from 'order/order.service';
import { Orders } from './entities/orders.entity';
import { OrderProducts } from './entities/orderProducts.entity';
import { Products } from 'products/entities/products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, OrderProducts, Products])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrdersModule {}
