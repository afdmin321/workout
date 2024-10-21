import { Module } from '@nestjs/common';
import { SsrController } from 'ssr/ssr.controller';
import { SsrService } from 'ssr/ssr.service';

@Module({
  imports: [],
  controllers: [SsrController],
  providers: [SsrService],
})
export class SsrModule {}
