import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from 'product/product.module';
import { CategoryModule } from 'category/category.module';
import { User } from 'user/entities/user.entity';

@Module({
  imports: [
    ProductModule,
    CategoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          synchronize: false,
          entities: [__dirname + '/**/*.entity{.ts,js}'],
        };
      },
      inject: [ConfigService],
    }),
    CategoryModule,
    ProductModule,
    User,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
