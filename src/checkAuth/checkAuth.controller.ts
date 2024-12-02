import { Controller, Get } from '@nestjs/common';
import { checkAuthService } from 'checkAuth/checkAuth.service';

@Controller()
export class checkAuthController {
  constructor(private readonly ssrService: checkAuthService) {}

  @Get('/asdf')
  main() {}
}
