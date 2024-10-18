if (!process.env.IS_TS_NODE) {
  require('module-alias/register');
}
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from 'app.module';
import { json, urlencoded } from 'express';
import { Logger } from 'Logger/Logger';
import * as compression from 'compression';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.use(
    compression({
      filter: () => {
        return true;
      },
      threshold: 0,
    }),
  );
  new FastifyAdapter({ bodyLimit: 108038100 });
  app.enableCors();
  app.useLogger(new Logger());
  await app.listen(3000);
}
bootstrap();
