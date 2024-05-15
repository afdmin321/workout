import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from 'products/products.module';
import { CategoriesModule } from 'categories/categories.module';
import { UserModule } from 'user/user.module';
import { AuthModule } from 'auth/auth.module';
import { ImagesModule } from 'images/images.module';

@Module({
  imports: [
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
    CategoriesModule,
    ProductsModule,
    UserModule,
    AuthModule,
    ImagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
