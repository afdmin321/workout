import { Module } from '@nestjs/common';
import { checkAuthController } from 'checkAuth/checkAuth.controller';
import { checkAuthService } from 'checkAuth/checkAuth.service';

@Module({
  imports: [],
  controllers: [checkAuthController],
  providers: [checkAuthService],
})
export class checkAuthModule {}
